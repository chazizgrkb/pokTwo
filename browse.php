<?php
require('lib/common.php');

$twig = twigloader();

$allShit = query("SELECT * FROM posts");

echo $twig->render('browse.twig', [
	'allShit' => $allShit
]);