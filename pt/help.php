<?php
namespace pokTwo\Meta;
require('lib/common.php');

$pageName = "help";

$twig = _twigloader();
echo $twig->render('meta/help.twig');