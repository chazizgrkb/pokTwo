<?php
namespace pokTwo;
require('lib/common.php');

$twig = twigloader();

echo $twig->render('tags.twig', [
	'tags' => $tags->getListOfTags("latestUse DESC", 50),
	'mostPopularTags' => $tags->getListOfTags("use_count DESC", 50),
]);