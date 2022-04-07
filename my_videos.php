<?php
namespace pokTwo;
require('lib/common.php');

if (!$log) redirect('vidlist.');

$query = isset($_GET['search']) ? $_GET['search'] : null;
$page = (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0 ? $_GET['page'] : 1);

// currently selects all uploaded videos
$videoData = $sql->query("SELECT * FROM videos WHERE author = ?", [$userdata['id']]);
$videos = $sql->fetchArray($videoData);

$tags = [];

foreach($videos as $key=>$value)
{
	$tags[$key] = [];
	array_push($tags[$key], Tags::getVideoTags($value['id']));
}

$count = $sql->result("SELECT COUNT(*) FROM videos WHERE author = ?", [$userdata['id']]);

$twig = twigloader();

echo $twig->render('vidlist.twig', [
	'videos' => $videos,
	'page' => $page,
	'count' => $count,
	'title' => "My Videos",
	'tags' => $tags,
]);
