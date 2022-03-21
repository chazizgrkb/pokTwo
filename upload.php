<?php
require('lib/common.php');

// quick and dirty redirect for not logged in users
if (!$log) redirect('/');

// Supported file types (MIME-type with image/ stripped)
$supportedTypes = ['png', 'jpeg', 'jpg', 'gif'];

$error = '';

if (isset($_FILES['uploaded_file'])) {
	$uploadedFile = ($_FILES['uploaded_file']);
	$title = (isset($_POST['title']) ? $_POST['title'] : '');
	$description = (isset($_POST['description']) ? $_POST['description'] : '');
	$tags = (isset($_POST['tags']) ? $_POST['tags'] : '');

	if (!$uploadedFile || !$title || !$description || !$tags) $error .= 'Please fill in all required fields.';

	$fileData = getimagesize($uploadedFile['tmp_name']);

	if ($uploadedFile['size'] > 8*1024*1024) $err .= "<br>The image too big. 8MiB upload limit";
	if (!in_array(str_replace('image/', '', $fileData['mime']), $supportedTypes)) $err .= "Invalid file type.";

	// This is actually inaccurate, see https://stackoverflow.com/questions/15821532/get-current-auto-increment-value-for-any-table
	// for when it becomes an issue
	$nextId = result("SELECT id FROM posts ORDER BY id DESC LIMIT 1") + 1;

	// Put in front of SQL query to prevent partial uploads caused by permission errors from
	// an inproper configuration.
	if (!move_uploaded_file($uploadedFile['tmp_name'], "media/$nextId")) {
		trigger_error("User content folder is not writeable.", E_USER_ERROR);
	}

	if (!$error) {
		query("INSERT INTO posts (title, description, author, time, recentview, tags) VALUES (?,?,?,?,?,?)",
			[$title, $description, $userdata['id'], time(), time(), $tags]);

		redirect('/post.php?id='.$nextId);
	}
}

$twig = twigloader();
echo $twig->render('upload.twig', ['error' => $error]);
