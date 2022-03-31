<?php
namespace pokTwo;
require('lib/common.php');

$section = (isset($_GET['s']) ? $_GET['s'] : null);

if ($section == "mp") {
$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, v.videolength, v.category_id, v.author FROM videos v JOIN users u ON v.author = u.id ORDER BY views DESC LIMIT 20");
$pageName = "browsePopular";
} elseif ($section == "md") {
$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, v.videolength, v.category_id, v.author FROM videos v JOIN users u ON v.author = u.id ORDER BY comments DESC LIMIT 20");
$pageName = "browseDiscussed";
} elseif ($section == "mf") {
$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, v.videolength, v.category_id, v.author FROM videos v JOIN users u ON v.author = u.id ORDER BY favorites DESC LIMIT 20");
$pageName = "browseFavorited";
} elseif ($section == "r") {
$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, v.videolength, v.category_id, v.author FROM videos v JOIN users u ON v.author = u.id ORDER BY RAND() LIMIT 20");
$pageName = "browseRandom";
} else {
$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, v.videolength, v.category_id, v.author FROM videos v JOIN users u ON v.author = u.id ORDER BY v.time DESC LIMIT 20");
$pageName = "browseMain";
}

die_dump(fetchArray($videoData));

$twig = twigloader();

echo $twig->render('browse.twig', [
	'videos' => $videoData,
]);