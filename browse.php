<?php

namespace pokTwo;
require('lib/common.php');

$section = ($_GET['s'] ?? null);
$page = (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0 ? $_GET['page'] : 1);
$limit = sprintf("%s,%s", (($page - 1) * $lpp), $lpp);

if ($section == "mp") {
    $videoData = Videos::getVideos("views DESC", $limit);
    $pageName = "browsePopular";
} elseif ($section == "md") {
    $videoData = Videos::getVideos("comments DESC", $limit);
    $pageName = "browseDiscussed";
} elseif ($section == "mf") {
    $videoData = Videos::getVideos("favorites DESC", $limit);
    $pageName = "browseFavorited";
} elseif ($section == "r") {
    $videoData = Videos::getVideos("RAND()", $limit);
    $pageName = "browseRandom";
} else {
    $videoData = Videos::getVideos("v.time DESC", $limit);
    $pageName = "browseMain";
}

$count = $sql->result("SELECT COUNT(*) FROM videos v");

$twig = twigloader();

echo $twig->render('browse.twig', [
    'videos' => $videoData,
    'page' => $page,
    'level_count' => $count
]);