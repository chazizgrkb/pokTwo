<?php
require('lib/common.php');

$showSmallHeader = true;

$twig = twigloader();

$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, v.videolength, v.tags, v.category_id, v.author FROM videos v JOIN users u ON v.author = u.id ORDER BY RAND() LIMIT 5");

echo $twig->render('index.twig', [
	'videos' => $videoData,
]);