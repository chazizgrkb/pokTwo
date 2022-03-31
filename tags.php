<?php
namespace pokTwo;
require('lib/common.php');

$showSmallHeader = false;

$twig = twigloader();

$tagData = query("SELECT t.*, COUNT(t.tag_id) AS use_count FROM tag_index ct LEFT JOIN tag_meta t ON ct.tag_id = t.tag_id GROUP BY ct.tag_id ORDER BY ct.tag_id DESC LIMIT 50");

$mostPopularTags = query("SELECT t.*, COUNT(t.tag_id) AS use_count FROM tag_index ct LEFT JOIN tag_meta t ON ct.tag_id = t.tag_id GROUP BY ct.tag_id ORDER BY `use_count` DESC LIMIT 50");

echo $twig->render('tags.twig', [
	'tags' => $tagData,
	'mostPopularTags' => $mostPopularTags,
]);