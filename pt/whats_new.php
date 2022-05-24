<?php
namespace pokTwo\Meta;
require('lib/common.php');

$pageName = "newShit";
$newsdata = $sql->query("SELECT * FROM news ORDER BY id DESC");

$twig = _twigloader();
echo $twig->render('meta/whats_new.twig', [
    'news' => $newsdata,
]);