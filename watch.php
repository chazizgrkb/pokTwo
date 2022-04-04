<?php
namespace pokTwo;
require('lib/common.php');
$id = (isset($_GET['v']) ? $_GET['v'] : null);
$searchShit = (isset($_GET['search']) ? $_GET['search'] : null);
$ip = (isset($_SERVER['HTTP_CLIENT_IP']) ? $_SERVER['HTTP_CLIENT_IP'] : (isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']));

$videoData = $sql->fetch("SELECT $userfields v.* FROM videos v JOIN users u ON v.author = u.id WHERE v.video_id = ?", [$id]);

if (!$videoData) error('404', "The video you were looking for cannot be found.");

$query = '';
$count = 0;
$commentData = $sql->query("SELECT $userfields c.comment_id, c.id, c.comment, c.author, c.date, c.deleted, (SELECT COUNT(reply_to) FROM comments WHERE reply_to = c.comment_id) AS replycount FROM comments c JOIN users u ON c.author = u.id WHERE c.id = ? ORDER BY c.date DESC", [$id]);

$pageName = "watch";

$allVideos = $sql->result("SELECT COUNT(id) FROM videos WHERE author=?", [$videoData['u_id']]);

if ($sql->fetch("SELECT COUNT(video_id) FROM views WHERE video_id=? AND user=?", [$videoData['video_id'], crypt($ip, "salt, used to encrypt stuff is very important.") ]) ['COUNT(video_id)'] < 1)
{
    $sql->query("INSERT INTO views (video_id, user) VALUES (?,?)", [$videoData['video_id'], crypt($ip, "salt, used to encrypt stuff is very important.") ]);
}

if ($log) {
	if ($sql->result("SELECT * from favorites WHERE video_id = ? AND user_id = ?", [$videoData['video_id'], $userdata['id']]))
	{
		$isFavorited = true;
	}
	else
	{
		$isFavorited = false;
	}
} else {
	$isFavorited = false;
}

if (isset($_GET['flash']) ? $_GET['flash'] : null)
{
    $isFlash = true;
}
else
{
    $isFlash = false;
}

$commentCount = $sql->fetch("SELECT COUNT(id) FROM comments WHERE id=?", [$videoData['video_id']]) ['COUNT(id)'];
$favoritesCount = $sql->fetch("SELECT COUNT(user_id) FROM favorites WHERE user_id=?", [$videoData['u_id']]) ['COUNT(user_id)'];
$viewCount = $sql->fetch("SELECT COUNT(video_id) FROM views WHERE video_id=?", [$videoData['video_id']]) ['COUNT(video_id)'];

$previousRecentView = $sql->result("SELECT most_recent_view from videos WHERE video_id = ?", [$id]);
$currentTime = time();

$sql->query("UPDATE videos SET most_recent_view = ? WHERE video_id = ?", [$currentTime, $id]);

$twig = twigloader();
echo $twig->render('watch.twig', [
	'video' => $videoData,
	'comments' => $commentData,
	'favorites' => $favoritesCount,
	'comCount' => $commentCount,
	'viewCount' => $viewCount,
	'recentView' => $previousRecentView,
	'allVideos' => $allVideos,
	'isFlash' => $isFlash,
	'tags' => Tags::getVideoTags($videoData['id']),
	'isFavorited' => $isFavorited,
	'recommendedNumber' => Videos::countRecommended($videoData['video_id']),
]);