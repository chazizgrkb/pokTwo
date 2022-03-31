<?php
namespace pokTwo;
require('lib/common.php');

$section = (isset($_GET['s']) ? $_GET['s'] : null);

if ($section == "mp") {
$videoData = getVideos("views DESC", 20);
$pageName = "browsePopular";
} elseif ($section == "md") {
$videoData = getVideos("comments DESC", 20);
$pageName = "browseDiscussed";
} elseif ($section == "mf") {
$videoData = getVideos("favorites DESC", 20);
$pageName = "browseFavorited";
} elseif ($section == "r") {
$videoData = getVideos("RAND()", 20);
$pageName = "browseRandom";
} else {
$videoData = getVideos("v.time DESC", 20);
$pageName = "browseMain";
}

$twig = twigloader();

echo $twig->render('browse.twig', [
	'videos' => $videoData,
]);