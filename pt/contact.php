<?php
namespace pokTwo\Meta;
require('lib/common.php');

$pageName = "contact";

$twig = _twigloader();
echo $twig->render('meta/contact.twig');