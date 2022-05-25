<?php
namespace pokTwo\Meta;
require('lib/common.php');

$pageName = "helpIndex";

$twig = _twigloader();
echo $twig->render('meta/index.twig');