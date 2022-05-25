<?php
namespace pokTwo\Meta;
require('lib/common.php');

$pageName = "about";

$twig = _twigloader();
echo $twig->render('meta/about.twig');