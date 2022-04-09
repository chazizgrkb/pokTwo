<?php

namespace pokTwo;
require('lib/common.php');

$pageName = "profile_favorites";

if (isset($_GET['id'])) {
    $userpagedata = $sql->fetch("SELECT * FROM users WHERE id = ?", [$_GET['id']]);
} else if (isset($_GET['user'])) {
    $userpagedata = $sql->fetch("SELECT * FROM users WHERE name = ?", [$_GET['user']]);
}

$allVideos = $sql->result("SELECT COUNT(id) FROM videos WHERE author=?", [$userpagedata['id']]);
$favoritesCount = $sql->result("SELECT COUNT(user_id) FROM favorites WHERE user_id=?", [$userdata['id']]);

$twig = twigloader();

$videoData = $sql->query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id WHERE author = ? ORDER BY v.time DESC LIMIT 5", [$userpagedata["id"]]);

echo $twig->render('profile_videos.twig', [
    'id' => $userpagedata['id'],
    'name' => $userpagedata['name'],
    'allVideos' => $allVideos,
    'allFavorites' => $favoritesCount,
    'userpagedata' => $userpagedata,
    'videos' => $videoData,
]);