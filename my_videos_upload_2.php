<?php

namespace pokTwo;

use FFMpeg\Coordinate;
use FFMpeg\FFMpeg;
use FFMpeg\FFProbe;
use FFMpeg\Filters;
use FFMpeg\Format\Video\FLV;
use FFMpeg\Format\Video\x264;


require('lib/common.php');
require_once('lib/external/FLV.php'); //annoyingly PHP-FFMpeg does not have FLV support.


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$config = [
    'timeout' => 3600, // The timeout for the underlying process
    'ffmpeg.threads' => 12,   // The number of threads that FFmpeg should use
    'ffmpeg.binaries' => ($ffmpegPath ? $ffmpegPath : 'ffmpeg'),
    'ffprobe.binaries' => ($ffprobePath ? $ffprobePath : 'ffprobe'),
];

$supportedFormats = ["mp4", "mkv", "wmv", "flv", "avi", "mov", "3gp"];

if (!$log) redirect('login.php');

$error = '';

$failcount = 0;

// fixme: move this into a function probably?
if (isset($_FILES['fileToUpload'])) {
    $uploader = $userdata['id'];
    $new = randstr(11);

    $vextension = strtolower(pathinfo($_FILES['fileToUpload']['name'], PATHINFO_EXTENSION));

    $name = $_FILES['fileToUpload']['name'];
    $temp_name = $_FILES['fileToUpload']['tmp_name'];
    $target_file = "preload/" . $new . "/" . $new . "." . $vextension;
    $preload_folder = "preload/" . $new;
    $upload_file = "media/" . $new . ".mp4";
    $target_thumb = "thumbs/" . $new . ".jpg";

    $title = ($_POST['title'] ?? '');
    $description = ($_POST['desc'] ?? '');
    $tags = ($_POST['tags'] ?? '');
    $tags2 = preg_split('/[\s,]+/', $tags); // parses both commas and spaces
    if (count($tags2) < 3) {
        die("Less than 3 tags!"); // we should have an actual error page, but this is alpha shit, so meh.
    }
    $tagsIDbullshit = array();
    $number = 0; //tf does this even do????
    foreach ($tags2 as $tag) {
        $tagsIDbullshit[] = $number;
        if (!$sql->result("SELECT name from tag_meta WHERE name = ?", [$tag])) {
            $sql->query("INSERT INTO tag_meta (name, latestUse) VALUES (?,?)", [$tag, time()]); //Insert tag onto database
        } else {
            $sql->query("UPDATE tag_meta SET latestUse = ? WHERE name = ?", [time(), $tag]); //Bump tag up the "lastest used" tags list by changing timestamp to current time.
        }
        $number = $sql->result("SELECT tag_id from tag_meta WHERE name = ?", [$tag]);
        $tagsIDbullshit[] = $number;
    }

    if (!in_array(strtolower($vextension), $supportedFormats, true)) {
        echo "<center><h1>Your video is an incompatible format.<br>To continue uploading this video, convert it to a supported format.</h1></center>";
        die();
    }

    if (!file_exists($preload_folder)) {
        mkdir($preload_folder);
    }

    if (move_uploaded_file($temp_name, $target_file)) {
        // FIXME: make it like squareBracket where the uploader is a PHP script outside of my_videos_upload_2.php, because making the browser wait until ffmpeg's done is dumb. -grkb 4/4/2022
        try {
            $ffmpeg = FFMpeg::create($config);
            $ffprobe = FFProbe::create($config);
            $h264 = new X264();
            $flv = new FLV();

            $h264->setAudioKiloBitrate(56)->setAdditionalParameters(array('-ar', '22050'));
            $flv->setAudioKiloBitrate(80)->setAdditionalParameters(array('-ar', '22050'));


            $video = $ffmpeg->open($target_file);
            $duration = $ffprobe
                ->format($target_file)    // extracts file informations
                ->get('duration');  // returns the duration property
            //this doesn't scale too well with short videos.
            $seccount = round($duration / 4);
            $seccount2 = $seccount * 1.5;
            $seccount3 = $seccount2 + $seccount - 1;

            $frame = $video->frame(Coordinate\TimeCode::fromSeconds($seccount));
            $frame->filters()->custom('scale=120x90');
            $frame->save('thumbs/' . $new . '.1.jpg');

            $frame = $video->frame(Coordinate\TimeCode::fromSeconds($seccount2));
            $frame->filters()->custom('scale=120x90');
            $frame->save('thumbs/' . $new . '.2.jpg');

            $frame = $video->frame(Coordinate\TimeCode::fromSeconds($seccount3));
            $frame->filters()->custom('scale=120x90');
            $frame->save('thumbs/' . $new . '.3.jpg');

            $video->filters()->resize(new Coordinate\Dimension(320, 240), Filters\Video\ResizeFilter::RESIZEMODE_INSET, true)
                ->custom('format=yuv420p');
            $video->save($h264, 'media/' . $new . '.mp4');
            $video->save($flv, 'media/' . $new . '.flv');
            debug_print_backtrace();
            unlink($target_file);

            $sql->query("INSERT INTO videos (video_id, title, description, author, time, most_recent_view, videofile, videolength) VALUES (?,?,?,?,?,?,?,?)", [$new, $title, $description, $userdata['id'], time(), time(), $upload_file, $duration]);

            $numID = $sql->result("SELECT id from videos WHERE video_id = ?", [$new]);

            foreach ($tagsIDbullshit as $tagID) {
                if (!$sql->result("SELECT tag_id from tag_index WHERE tag_id = ? AND video_id = ?", [$tagID, $numID])) {
                    $sql->query("INSERT INTO tag_index (video_id, tag_id) VALUES (?,?)", [$numID, $tagID]);
                }
            }

            delete_directory($preload_folder);
            redirect('/watch.php?v=' . $new);
        } catch (Exception $e) {
            echo "<center><h1>Your video was unable to be uploaded.<br>If you see this screen, report it to staff/admin.</h1></center>" . $e->getMessage();
        }

        clearstatcache();
        if (0 == filesize("media/" . $new . ".mp4")) {
            unlink("media/" . $new . ".mp4");
            delete_directory($preload_folder);
            $failcount++;
        }

        if ($failcount == 1) {
            unlink("media/" . $new . ".mp4");
            delete_directory($preload_folder);
            die("");
        }
    }
}

$twig = twigloader();
echo $twig->render('my_videos_upload_2.twig', ['error' => $error, 'title' => $_POST["title"], 'desc' => $_POST["desc"], 'tags' => $_POST["tags"],]);