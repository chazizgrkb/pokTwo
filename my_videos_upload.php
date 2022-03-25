<?php
require('lib/common.php');

if (!$log) redirect('login.php');

$twig = twigloader();
echo $twig->render('my_videos_upload.twig');
