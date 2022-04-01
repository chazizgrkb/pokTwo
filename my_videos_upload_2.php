<?php
namespace pokTwo;
require ('lib/common.php');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (!$log) redirect('login.php');

// Supported file types (MIME-type with image/ stripped)
$supportedTypes = ['mp4', 'avi', 'wmv', 'mov'];

$error = '';


// fixme: move this into a function probably?
if (isset($_FILES['fileToUpload']))
{
    $uploader = $userdata['id'];
    $new = randstr(11);

    $vextension = pathinfo($_FILES['fileToUpload']['name'], PATHINFO_EXTENSION);

    $name = $_FILES['fileToUpload']['name'];
    $temp_name = $_FILES['fileToUpload']['tmp_name'];
    $target_file = "preload/" . $new . "/" . $new . "." . $vextension;
    $preload_folder = "preload/" . $new;
    $upload_file = "media/" . $new . ".mp4";
    $target_thumb = "thumbs/" . $new . ".jpg";

    $title = (isset($_POST['title']) ? $_POST['title'] : '');
    $description = (isset($_POST['desc']) ? $_POST['desc'] : '');
    $tags = (isset($_POST['tags']) ? $_POST['tags'] : '');
    $tags2 = preg_split('/\s+/', $tags);
    $tagsIDbullshit = array();
    foreach ($tags2 as $tag)
    {
        if (!$mysql->result("SELECT name from tag_meta WHERE name = ?", [$tag]))
        {
            $mysql->query("INSERT INTO tag_meta (name, latestUse) VALUES (?,?)", [$tag, time()]);
        } else {
			$mysql->query("UPDATE tag_meta SET latestUse = ? WHERE name = ?", [time(), $tag]);
		}
        $number = $mysql->result("SELECT tag_id from tag_meta WHERE name = ?", [$tag]);
        $tagsIDbullshit[] = $number;
    }
	if (count($tagsIDbullshit) < 3) {
		die("Less than 3 tags!");
	}
    //$thumbcmd = "$ffmpegPath -i $target_file -vf \"thumbnail\" -frames:v 1 -s 120x90 $target_thumb";
    if ($vextension != "mp4" && $vextension != "mkv" && $vextension != "wmv" && $vextension != "flv" && $vextension != "avi" && $vextension != "mov" && $vextension != "3gp")
    {
        echo "<center><h1>Your video is an incompatible format.<br>To continue uploading this video, convert it to a supported format.</h1></center>";
        die();
    }

    if (!file_exists($preload_folder))
    {
        mkdir($preload_folder);
    }

    if (move_uploaded_file($temp_name, $target_file))
    {
        $seccount_og = round(exec("$ffprobePath -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 " . $target_file));
        $seccount = $seccount_og / 3;
        $seccount = round($seccount);
        $thumbcmd1 = $ffmpegPath . " -i " . $target_file . " -vframes 1 -an -s 120x90 -ss " . $seccount . " -frames:v 1 thumbs/" . $new . ".1.jpg ";
        $seccount2 = $seccount + $seccount;
        $thumbcmd2 = $ffmpegPath . " -i " . $target_file . " -vframes 1 -an -s 120x90 -ss " . $seccount2 . " -frames:v 1 thumbs/" . $new . ".2.jpg ";
        $seccount3 = $seccount2 + $seccount - 3;
        $thumbcmd3 = $ffmpegPath . " -i " . $target_file . " -vframes 1 -an -s 120x90 -ss " . $seccount3 . " -frames:v 1 thumbs/" . $new . ".3.jpg ";

        exec($thumbcmd1);
        exec($thumbcmd2);
        exec($thumbcmd3);
        exec("$ffmpegPath  -i " . $target_file . " -vf scale=320x240 -c:v libx264 -b:a 56k  -c:a aac -ar 22050 media/" . $new . ".mp4");
        exec("$ffmpegPath  -i " . $target_file . " -vf scale=320x240 -c:v flv1 -b:a 80k  -c:a mp3 -ar 22050 media/" . $new . ".flv");

        clearstatcache();
        if (0 == filesize("media/" . $new . ".mp4"))
        {
            unlink("media/" . $new . ".mp4");
            delete_directory($preload_folder);
            $failcount++;
        }

        if ($failcount == 1)
        {
            unlink("media/" . $new . ".mp4");
            delete_directory($preload_folder);
            die("<center><h1>Your video was unable to be uploaded.<br>If you see this screen, report it to staff/admin.</h1></center>");
        }

        if (!$error)
        {
            $mysql->query("INSERT INTO videos (video_id, title, description, author, time, most_recent_view, videofile, videolength) VALUES (?,?,?,?,?,?,?,?)", [$new, $title, $description, $userdata['id'], time() , time() , $upload_file, $seccount_og]);

            $numID = $mysql->result("SELECT id from videos WHERE video_id = ?", [$new]);

            foreach ($tagsIDbullshit as $tagID)
            {
                if (!$mysql->result("SELECT tag_id from tag_index WHERE tag_id = ? AND video_id = ?", [$tagID, $numID]))
                {
                    $mysql->query("INSERT INTO tag_index (video_id, tag_id) VALUES (?,?)", [$numID, $tagID]);
                }
            }

            delete_directory($preload_folder);
            redirect('/watch.php?v=' . $new);
        }
    }
}

$twig = twigloader();
echo $twig->render('my_videos_upload_2.twig', ['error' => $error, 'title' => $_POST["title"], 'desc' => $_POST["desc"], 'tags' => $_POST["tags"], ]);