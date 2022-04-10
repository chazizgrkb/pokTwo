<?php

namespace pokTwo;
require('lib/common.php');

$pageName = "profile_favorites";
$page = (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0 ? $_GET['page'] : 1);
$limit = sprintf("LIMIT %s,%s", (($page - 1) * $lpp), $lpp);

if (isset($_GET['id'])) {
    $userpagedata = $sql->fetch("SELECT * FROM users WHERE id = ?", [$_GET['id']]);
} else if (isset($_GET['user'])) {
    $userpagedata = $sql->fetch("SELECT * FROM users WHERE name = ?", [$_GET['user']]);
}

$allVideos = $sql->result("SELECT COUNT(id) FROM videos WHERE author=?", [$userpagedata['id']]);
$favoritesCount = $sql->result("SELECT COUNT(user_id) FROM favorites WHERE user_id=?", [$userdata['id']]);

$twig = twigloader();

$videoData = $sql->query("
SELECT $userfields $videofields FROM videos v 
	JOIN users u ON v.author = u.id 
	JOIN favorites f ON (f.video_id = v.video_id) 
	WHERE 
		f.user_id = ?
ORDER BY v.time DESC $limit", [$userpagedata['id']]);
$videos = $sql->fetchArray($videoData);
foreach ($videos as &$video) {
    $video['tags'] = VideoTags::getVideoTags($video['id']);
}

echo $twig->render('profile_videos.twig', [
    'id' => $userpagedata['id'],
    'name' => $userpagedata['name'],
    'allVideos' => $allVideos,
    'allFavorites' => $favoritesCount,
    'userpagedata' => $userpagedata,
    'videos' => $videos,
	'page' => $page,
    'level_count' => $favoritesCount,
	'page_name' => $pageName
]);