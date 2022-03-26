<?php
require('lib/common.php');

$twig = twigloader();

$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, v.videolength, v.category_id, v.author FROM videos v JOIN users u ON v.author = u.id ORDER BY v.time DESC LIMIT 5");

$mostViewedData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, v.videolength, v.category_id, v.author FROM videos v JOIN users u ON v.author = u.id ORDER BY views DESC LIMIT 5");

echo $twig->render('videos_page.twig', [
	'videos' => $videoData,
	'mostViewed' => $mostViewedData,
]);