<?php
namespace pokTwo\oldMeta;
require('lib/common.php');

$twig = _twigloader();
echo $twig->render('terms.twig');