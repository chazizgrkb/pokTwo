<?php

namespace pokTwo;
require('lib/common.php');

$twig = twigloader();

echo $twig->render('tags.twig', [
    'tags' => VideoTags::getListOfTags("latestUse DESC", 50),
    'mostPopularTags' => VideoTags::getListOfTags("use_count DESC", 50),
]);