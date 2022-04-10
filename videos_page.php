<?php

namespace pokTwo;
require('lib/common.php');

$twig = twigloader();

$videoData = Videos::getVideos("v.time DESC", 5);

$mostViewedData = Videos::getVideos("views DESC", 5);

$mostCommentedData = Videos::getVideos("comments DESC", 5);

$mostFavoritedData = Videos::getVideos("favorites DESC", 5);

echo $twig->render('videos_page.twig', [
    'videos' => $videoData,
    'mostViewed' => $mostViewedData,
    'mostCommented' => $mostCommentedData,
    'mostFavorited' => $mostFavoritedData,
]);