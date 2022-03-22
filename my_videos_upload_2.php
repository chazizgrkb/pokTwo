<?php
require('lib/common.php');
ini_set('display_errors', 1); 
ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);

// quick and dirty redirect for not logged in users
if (!$log) redirect('/');

// Supported file types (MIME-type with image/ stripped)
$supportedTypes = ['mp4', 'avi', 'wmv', 'mov'];

$error = '';

if (isset($_FILES['fileToUpload'])) {
	$uploader = $userdata['id'];
	$new = randstr(11);
	
	$vextension  = pathinfo( $_FILES['fileToUpload']['name'], PATHINFO_EXTENSION );
	
	$name       = $_FILES['fileToUpload']['name'];
	$temp_name  = $_FILES['fileToUpload']['tmp_name'];
	$target_file = "preload/".$new."/".$new.".".$vextension;
	$preload_folder = "preload/".$new;
	$upload_file = "media/".$new.".".$vextension;
	$target_thumb = "thumbs/".$new.".jpg";
	
	$title = (isset($_POST['title']) ? $_POST['title'] : '');
	$description = (isset($_POST['desc']) ? $_POST['desc'] : '');
	$tags = (isset($_POST['tags']) ? $_POST['tags'] : '');
	
	//$thumbcmd = "$ffmpegPath -i $target_file -vf \"thumbnail\" -frames:v 1 -s 120x90 $target_thumb";
	
	if($vextension != "mp4" && $vextension != "mkv" && $vextension != "wmv" && $vextension != "flv" && $vextension != "avi" && $vextension != "mov" && $vextension != "3gp") {
		echo "<center><h1>Your video is an incompatible format.<br>To continue uploading this video, convert it to a supported format.</h1></center>";
		die();
	}
						
	if (!file_exists($preload_folder)) {
		mkdir($preload_folder);
	}

	if(move_uploaded_file($temp_name, $target_file)){
		//$framecount = exec("$ffprobePath -v error -select_streams v:0 -count_frames -show_entries stream=nb_read_frames -print_format default=nokey=1:noprint_wrappers=1 -of csv=p=0 ".$target_file);
		$thumbcmd1 = $ffmpegPath . " -i ".$target_file." -vframes 1 -an -s 120x90 -ss 3 -frames:v 1 thumbs/".$new.".1.jpg ";
		$thumbcmd2 = $ffmpegPath . " -i ".$target_file." -vframes 1 -an -s 120x90 -ss 6 -frames:v 1 thumbs/".$new.".2.jpg ";
		$thumbcmd3 = $ffmpegPath . " -i ".$target_file." -vframes 1 -an -s 120x90 -ss 9 -frames:v 1 thumbs/".$new.".3.jpg ";

		exec($thumbcmd1);
		exec($thumbcmd2);
		exec($thumbcmd3);
		exec("$ffmpegPath  -i ".$target_file." -vf scale=320x240 -c:v libx264 -b:a 56k  -c:a mp3 -ar 22050 media/".$new.".mp4");
		exec("$ffmpegPath  -i ".$target_file." -vf scale=320x240 -c:v flv1 -b:a 80k  -c:a mp3 -ar 22050 media/".$new.".flv");

						clearstatcache();
						if ( 0 == filesize("media/".$new.".mp4") ) {
							unlink("media/".$new.".mp4");
							delete_directory($preload_folder);
							$failcount++;
						}
						
						if($failcount == 1) {
							unlink("media/".$new.".mp4");
							delete_directory($preload_folder);
							die("<center><h1>Your video was unable to be uploaded.<br>If you see this screen, report it to staff/admin.</h1></center>");
						}

		//if ($uploadedFile['size'] > 8*1024*1024) $err .= "<br>The image too big. 8MiB upload limit";
		//if (!in_array(str_replace('image/', '', $fileData['mime']), $supportedTypes)) $err .= "Invalid file type.";

		// Put in front of SQL query to prevent partial uploads caused by permission errors from
		// an inproper configuration.
		//if (!move_uploaded_file($uploadedFile['tmp_name'], "media/$new")) {
		//	trigger_error("User content folder is not writeable.", E_USER_ERROR);
		//}

		if (!$error) {
		query("INSERT INTO videos (video_id, title, description, author, time, most_recent_view, tags, videofile) VALUES (?,?,?,?,?,?,?,?)",
			[$new, $title, $description, $userdata['id'], time(), time(), $tags, $upload_file]);

		delete_directory($preload_folder);
		redirect('/watch.php?v='.$new);
		}
	}
}

$twig = twigloader();
echo $twig->render('my_videos_upload_2.twig', [
	'error' => $error,
	'title' =>  $_POST["title"],
	'desc' =>  $_POST["desc"],
]);
