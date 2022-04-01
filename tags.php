<?php
namespace pokTwo;
require('lib/common.php');

$showSmallHeader = false;

$twig = twigloader();

echo $twig->render('tags.twig', [
	'tags' => getListOfTags("ct.tag_id DESC", 50),
	'mostPopularTags' => getListOfTags("use_count DESC", 50),
]);