<?php
namespace pokTwo;
require('lib/common.php');

$showSmallHeader = true;

$twig = twigloader();

$videoData = query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id ORDER BY RAND() LIMIT 5");

$tagData = query("SELECT t.*, COUNT(t.tag_id) AS use_count FROM tag_index ct LEFT JOIN tag_meta t ON ct.tag_id = t.tag_id GROUP BY ct.tag_id ORDER BY ct.tag_id DESC LIMIT 50");


echo $twig->render('index.twig', [
	'videos' => $videoData,
	'tags' => $tagData,
]);