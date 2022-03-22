<?php
require('lib/common.php');

// quick and dirty redirect for not logged in users
if (!$log) redirect('/');

// Supported file types (MIME-type with image/ stripped)
$supportedTypes = ['mp4', 'avi', 'wmv', 'mov'];

$error = '';

if (isset($_FILES['uploaded_file'])) {
	$uploader = $userdata['id'];
	$new = randstr(11);
	
	$vextension  = pathinfo( $_FILES['uploaded_file']['name'], PATHINFO_EXTENSION );
	
	$name       = $_FILES['uploaded_file']['name'];
	$temp_name  = $_FILES['uploaded_file']['tmp_name'];
	$target_file = "preload/".$new."/".$new.".".$vextension;
	$preload_folder = "preload/".$new;
	$upload_file = "media/".$new.".".$vextension;
	
	$title = (isset($_POST['title']) ? $_POST['title'] : '');
	$description = (isset($_POST['description']) ? $_POST['description'] : '');
	$tags = (isset($_POST['tags']) ? $_POST['tags'] : '');
	
	if (!file_exists($preload_folder)) {
		mkdir($preload_folder);
	}

	if(move_uploaded_file($temp_name, $target_file)){
		exec("$ffmpegPath  -i ".$target_file." -vf scale=320x240 -aspect 4:3 -c:v libx264 -b:a 56k  -c:a mp3 -ar 22050 media/".$new.".mp4");
		exec("$ffmpegPath  -i ".$target_file." -vf scale=320x240 -aspect 4:3 -c:v flv1 -b:a 80k  -c:a mp3 -ar 22050 media/".$new.".flv");

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
echo $twig->render('upload.twig', ['error' => $error]);
