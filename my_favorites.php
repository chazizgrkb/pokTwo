<?php

namespace pokTwo;
require('lib/common.php');

if (!$log) redirect('login.php');

$page = (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0 ? $_GET['page'] : 1);
$limit = sprintf("LIMIT %s,%s", (($page - 1) * $lpp), $lpp);

$twig = twigloader();

echo $twig->render('vidlist.twig', [
    'videos' => Videos::getFavoritedVideosFromUser($limit, $userdata['id']),
    'page' => $page,
    'count' => Users::getUserFavoriteCount($userdata['id']),
    'title' => "My Favorites",
]);
