<?php
namespace pokTwo;
require('lib/common.php');

$twig = twigloader();

echo $twig->render('tags.twig', [
	'tags' => Tags::getListOfTags("latestUse DESC", 50),
	'mostPopularTags' => Tags::getListOfTags("use_count DESC", 50),
]);