<?php
namespace pokTwo;
require('lib/common.php');

$twig = twigloader();

$videoData = query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id ORDER BY v.time DESC LIMIT 5");

$mostViewedData = query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id ORDER BY views DESC LIMIT 5");

$mostCommentedData = query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id ORDER BY comments DESC LIMIT 5");

$mostFavoritedData = query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id ORDER BY favorites DESC LIMIT 5");

echo $twig->render('videos_page.twig', [
	'videos' => $videoData,
	'mostViewed' => $mostViewedData,
	'mostCommented' => $mostCommentedData,
	'mostFavorited' => $mostFavoritedData,
]);