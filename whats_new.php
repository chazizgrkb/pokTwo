<?php
namespace pokTwo;
require('lib/common.php');

$newsdata = $mysql->query("SELECT * FROM news ORDER BY id DESC");

$twig = twigloader();
echo $twig->render('whats_new.twig', [
	'news' => $newsdata,
]);