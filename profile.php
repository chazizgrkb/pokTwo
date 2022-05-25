<?php

namespace pokTwo;

use Parsedown;

require('lib/common.php');

$cssGarbage = "channel branded-page-base-bold-titles clearfix";

if (isset($_GET['id'])) {
    $userpagedata = $sql->fetch("SELECT * FROM users WHERE id = ?", [$_GET['id']]);
} else if (isset($_GET['user'])) {
    $userpagedata = $sql->fetch("SELECT * FROM users WHERE name = ?", [$_GET['user']]);
}

if (!isset($userpagedata) || !$userpagedata) {
    error('404', "No user specified.");
}

$pageName = $userpagedata['name'];
$jsPageName = "channel";

$forceuser = isset($_GET['forceuser']);

// Personal user page stuff
if ($userpagedata['about']) {
    $markdown = new Parsedown();
    $markdown->setSafeMode(true);
    $userpagedata['about'] = $markdown->text($userpagedata['about']);
}

$twig = twigloader();
echo $twig->render('profile.twig', [
    'id' => $userpagedata['id'],
    'name' => $userpagedata['name'],
    'latestVideos' => Videos::getVideos('v.time DESC', 12, 'v.author', $userpagedata['id']),
	'popularVideos' => Videos::getVideos('views DESC', 12, 'v.author', $userpagedata['id']),
    'allVideos' => Users::getUserVideoCount($userpagedata['id']),
    'allFavorites' => Users::getUserFavoriteCount($userpagedata['id']),
    'userpagedata' => $userpagedata,
    'forceuser' => $forceuser,
    'edited' => (isset($_GET['edited']) ? true : false), // TODO: merge these three stuffs into one variable
    'justbanned' => ($_GET['justbanned'] ?? null),
]);