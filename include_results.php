<?php
namespace pokTwo;
require('lib/common.php');

$page = "recommended";

if (isset($_GET['v'])) {
	$query = substr($_GET['search'], 0, -1);
	$query = implode("','", explode(" ", $query));
	$vid = $_GET['v'];
	$latestVideo = Videos::getRecommended($vid);
}

$twig = twigloader();
echo $twig->render('videos_list.twig', [
	'latestVideo' => $latestVideo,
]);