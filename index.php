<?php
namespace pokTwo;
require('lib/common.php');

$twig = twigloader();

echo $twig->render('index.twig', [
	'videos' => getVideos("RAND()", 5),
	'tags' => getListOfTags("latestUse DESC", 50),
]);