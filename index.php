<?php
namespace pokTwo;
require('lib/common.php');

$twig = twigloader();

$tagData = query("SELECT t.*, COUNT(t.tag_id) AS use_count FROM tag_index ct LEFT JOIN tag_meta t ON ct.tag_id = t.tag_id GROUP BY ct.tag_id ORDER BY ct.tag_id DESC LIMIT 50");


echo $twig->render('index.twig', [
	'videos' => getVideos("RAND()", 5),
	'tags' => $tagData,
]);