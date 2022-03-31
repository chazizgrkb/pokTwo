<?php
namespace pokTwo;
require('lib/common.php');

$twig = twigloader();
echo $twig->render('privacy.twig');