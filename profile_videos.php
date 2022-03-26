<?php
require('lib/common.php');

$pageName = "profile_videos";

if (isset($_GET['id'])) {
	$userpagedata = fetch("SELECT * FROM users WHERE id = ?", [$_GET['id']]);
} else if (isset($_GET['user'])) {
	$userpagedata = fetch("SELECT * FROM users WHERE name = ?", [$_GET['user']]);
}

$allVideos = result("SELECT COUNT(id) FROM videos WHERE author=?", [$userpagedata['id']]);
$favoritesCount = result("SELECT COUNT(user_id) FROM favorites WHERE user_id=?", [$userdata['id']]);

$twig = twigloader();

$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, v.videolength, v.category_id, v.author FROM videos v JOIN users u ON v.author = u.id WHERE author = ? ORDER BY RAND() LIMIT 5", [$userpagedata["id"]]);

echo $twig->render('profile_videos.twig', [
	'id' => $userpagedata['id'],
	'name' => $userpagedata['name'],
	'allVideos' => $allVideos,
	'allFavorites' => $favoritesCount,
	'userpagedata' => $userpagedata,
	'videos' => $videoData,
]);