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
    $new = randstr(11);

    $vextension = strtolower(pathinfo($_FILES['fileToUpload']['name'], PATHINFO_EXTENSION));

    $temp_name = $_FILES['fileToUpload']['tmp_name'];
    $target_file = "preload/" . $new . "/" . $new . "." . $vextension;
    $preload_folder = "preload/" . $new;
    $upload_file = "media/" . $new . ".mp4";

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
        $tagsIDbullshit[] = $number; // what the fuck
        if (!$sql->result("SELECT name from tag_meta WHERE name = ?", [$tag])) {
            VideoTags::insertTag($tag); //Insert tag onto database
        } else {
            VideoTags::bumpTag($tag); //Bump tag up the "lastest used" tags list by changing timestamp to current time.
        }
        $number = $sql->result("SELECT tag_id from tag_meta WHERE name = ?", [$tag]);
        $tagsIDbullshit[] = $number;
    }

    if (!in_array(strtolower($vextension), $supportedFormats, true)) {
        echo "<h1>Your video is an incompatible format.<br>To continue uploading this video, convert it to a supported format.</h1>";
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
			
			//get frame count
            $duration = $ffprobe
                ->streams($target_file)	// extracts file informations
				->videos()              // filters video streams
				->first()               // returns the first video stream			
                ->get('nb_frames');  	// returns the duration property
			
			//get fractional framerate
			$fracFramerate = $ffprobe
				->streams($target_file)	// extracts file informations
				->videos()              // filters video streams
				->first()               // returns the first video stream	
				->get("avg_frame_rate");
				
			//get the actual framerate
			$framerate = explode("/", $fracFramerate)[0] / explode("/", $fracFramerate)[1];
            
			
			//this doesn't scale too well with short videos.
            $seccount = round($duration / 4);
            $seccount2 = $seccount * 1.5;
            $seccount3 = $seccount2 + $seccount - 1;

            $frame = $video->frame(Coordinate\TimeCode::fromSeconds($seccount / $framerate));
            $frame->filters()->custom('scale=120x90');
            $frame->save('thumbs/' . $new . '.1.jpg');

            $frame = $video->frame(Coordinate\TimeCode::fromSeconds($seccount2 / $framerate));
            $frame->filters()->custom('scale=120x90');
            $frame->save('thumbs/' . $new . '.2.jpg');

            $frame = $video->frame(Coordinate\TimeCode::fromSeconds($seccount3 / $framerate));
            $frame->filters()->custom('scale=120x90');
            $frame->save('thumbs/' . $new . '.3.jpg');

            $video->filters()->resize(new Coordinate\Dimension(320, 240), Filters\Video\ResizeFilter::RESIZEMODE_INSET, true)
                ->custom('format=yuv420p');
            $video->save($h264, 'media/' . $new . '.mp4');
            $video->save($flv, 'media/' . $new . '.flv');
            debug_print_backtrace();
            unlink($target_file);

            Videos::addVideo($new, $title, $description, $userdata['id'], $upload_file, $duration);

            $numID = $sql->result("SELECT id from videos WHERE video_id = ?", [$new]);

            foreach ($tagsIDbullshit as $tagID) {
                if (!$sql->result("SELECT tag_id from tag_index WHERE tag_id = ? AND video_id = ?", [$tagID, $numID])) {
                    $sql->query("INSERT INTO tag_index (video_id, tag_id) VALUES (?,?)", [$numID, $tagID]);
                }
            }

            delete_directory($preload_folder);
            redirect('/watch.php?v=' . $new);
        } catch (Exception $e) {
            echo "<h1>Your video was unable to be uploaded.<br>If you see this screen, report it to staff/admin.</h1>" . $e->getMessage();
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
            die("Fuck");
        }
    }
}

$twig = twigloader();
echo $twig->render('my_videos_upload_2.twig', ['error' => $error, 'title' => $_POST["title"], 'desc' => $_POST["desc"], 'tags' => $_POST["tags"],]);