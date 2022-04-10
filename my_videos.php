<?php

namespace pokTwo;
require('lib/common.php');

if (!$log) redirect('login.php');

$query = $_GET['search'] ?? null;
$page = (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0 ? $_GET['page'] : 1);
$limit = sprintf("%s,%s", (($page - 1) * $lpp), $lpp);

// currently selects all uploaded videos
$videos = Videos::getVideos('v.time DESC', $limit, 'v.author', $userdata['id']);

$count = $sql->result("SELECT COUNT(*) FROM videos WHERE author = ?", [$userdata['id']]);

$twig = twigloader();

echo $twig->render('vidlist.twig', [
    'videos' => $videos,
    'page' => $page,
    'count' => $count,
    'title' => "My Videos",
]);
