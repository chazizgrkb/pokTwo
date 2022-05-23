<?php

namespace pokTwo;
require('lib/common.php');

$pageName = "index";
$cssGarbage = "home clearfix masthead-ad-expanded";

$twig = twigloader();

echo $twig->render('index.twig', [
    'videos' => Videos::getVideos("RAND()", 5),
	'popularVideos' => Videos::getVideos("views DESC", 12),
    'tags' => VideoTags::getListOfTags("latestUse DESC", 50),
]);