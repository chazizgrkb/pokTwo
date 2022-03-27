<?php
require('lib/common.php');

$page = "recommended";

if (isset($_GET['search'])) {
	$query = substr($_GET['search'], 0, -1);
	$query = implode("','", explode(" ", $query));
	$latestVideo = query("SELECT DISTINCT $userfields t1.*, ( SELECT COUNT(*) FROM views WHERE video_id = t1.video_id ) AS views, ( SELECT COUNT(*) FROM comments WHERE id = t1.video_id ) AS comments, ( SELECT COUNT(*) FROM favorites WHERE video_id = t1.video_id ) AS favorites, t2.name FROM videos AS t1 JOIN users u ON t1.author = u.id JOIN tag_index AS join_table ON t1.id = join_table.video_id JOIN tag_meta AS t2 ON t2.tag_id = join_table.tag_id WHERE t2.name IN('$query');");
}

$twig = twigloader();
echo $twig->render('videos_list.twig', [
	'latestVideo' => $latestVideo,
]);