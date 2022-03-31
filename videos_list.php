<?php
namespace pokTwo;
require('lib/common.php');

$page = "embed_list";

if (isset($_GET['id'])) {
	$userpagedata = fetch("SELECT * FROM users WHERE id = ?", [$_GET['id']]);
} else if (isset($_GET['user'])) {
	$userpagedata = fetch("SELECT * FROM users WHERE name = ?", [$_GET['user']]);
}
	
$latestVideo = query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id WHERE author = ? ORDER BY v.id DESC LIMIT 20", [$userpagedata['id']]);
$allVideos = result("SELECT COUNT(id) FROM videos WHERE author=?", [$userpagedata['id']]);

if (!isset($userpagedata) || !$userpagedata) {
	error('404', "No user specified.");
}

$twig = twigloader();
echo $twig->render('videos_list.twig', [
	'id' => $userpagedata['id'],
	'name' => $userpagedata['name'],
	'latestVideo' => $latestVideo,
	'allVideos' => $allVideos,
	'userpagedata' => $userpagedata,
]);