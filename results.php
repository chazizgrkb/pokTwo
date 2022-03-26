<?php
require('lib/common.php');

$query = isset($_GET['search']) ? $_GET['search'] : null;

// currently selects all uploaded videos
$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, v.author FROM videos v JOIN users u ON v.author = u.id WHERE v.title LIKE CONCAT('%', ?, '%') OR v.description LIKE CONCAT('%', ?, '%') ORDER BY v.id DESC", [$query, $query]);

$twig = twigloader();

echo $twig->render('results.twig', [
	'videos' => $videoData,
	'query' => $query
]);
