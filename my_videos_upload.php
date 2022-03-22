<?php
require('lib/common.php');

// quick and dirty redirect for not logged in users
if (!$log) redirect('/');

$twig = twigloader();
echo $twig->render('my_videos_upload.twig');
