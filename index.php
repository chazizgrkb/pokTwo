<?php

namespace pokTwo;
require('lib/common.php');

$pageName = "index";

$twig = twigloader();

echo $twig->render('index.twig', [
    'videos' => Videos::getVideos("RAND()", 5),
    'tags' => VideoTags::getListOfTags("latestUse DESC", 50),
]);