<?php

namespace pokTwo;
require('lib/common.php');

$twig = twigloader();

$videoData = $sql->query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id ORDER BY v.time DESC LIMIT 5");

$mostViewedData = $sql->query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id ORDER BY views DESC LIMIT 5");

$mostCommentedData = $sql->query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id ORDER BY comments DESC LIMIT 5");

$mostFavoritedData = $sql->query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id ORDER BY favorites DESC LIMIT 5");

echo $twig->render('videos_page.twig', [
    'videos' => $videoData,
    'mostViewed' => $mostViewedData,
    'mostCommented' => $mostCommentedData,
    'mostFavorited' => $mostFavoritedData,
]);