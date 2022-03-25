<?php
require('lib/common.php');
$id = (isset($_GET['v']) ? $_GET['v'] : null);
$ip = (isset($_SERVER['HTTP_CLIENT_IP']) ? $_SERVER['HTTP_CLIENT_IP'] : (isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']));

$videoData = fetch("SELECT $userfields v.* FROM videos v JOIN users u ON v.author = u.id WHERE v.video_id = ?", [$id]);

if (!$videoData) error('404', "The video you were looking for cannot be found.");

$query = '';
$count = 0;
$commentData = query("SELECT $userfields c.comment_id, c.id, c.comment, c.author, c.date, c.deleted, (SELECT COUNT(reply_to) FROM comments WHERE reply_to = c.comment_id) AS replycount FROM comments c JOIN users u ON c.author = u.id WHERE c.id = ? ORDER BY c.date DESC", [$id]);

if ($count == 0) {
	$relatedVideosData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, v.author, v.videolength FROM videos v JOIN users u ON v.author = u.id WHERE NOT v.video_id = ? ORDER BY RAND() LIMIT 6", [$id]);
} else {
	$relatedVideosData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, v.author, v.videolength FROM videos v JOIN users u ON v.author = u.id WHERE NOT v.video_id = ? ORDER BY ".$query." DESC, RAND() LIMIT 6", [$id]); //unsafe code, do not deply to production.
}

$allVideos = result("SELECT COUNT(id) FROM videos WHERE author=?", [$videoData['u_id']]);

if (fetch("SELECT COUNT(video_id) FROM views WHERE video_id=? AND user=?", [$videoData['video_id'], crypt($ip, "salt, used to encrypt stuff is very important.")])['COUNT(video_id)'] < 1) {
	query("INSERT INTO views (video_id, user) VALUES (?,?)",
		[$videoData['video_id'],crypt($ip, "salt, used to encrypt stuff is very important.")]);
}

if (isset($_GET['flash']) ? $_GET['flash'] : null)
{
	$isFlash = true;
} else {
	$isFlash = false;
}

$commentCount = fetch("SELECT COUNT(id) FROM comments WHERE id=?", [$videoData['video_id']])['COUNT(id)'];
$viewCount = fetch("SELECT COUNT(video_id) FROM views WHERE video_id=?", [$videoData['video_id']])['COUNT(video_id)'];

$tags = query("SELECT * FROM tag_index WHERE video_id = ?", [$videoData['id']]);

query("UPDATE videos SET views = views + '1' WHERE video_id = ?", [$id]);

$previousRecentView = result("SELECT most_recent_view from videos WHERE video_id = ?", [$id]);
$currentTime = time();

query("UPDATE videos SET most_recent_view = ? WHERE video_id = ?", [$currentTime,$id]); 

$twig = twigloader();
echo $twig->render('watch.twig', [
	'video' => $videoData,
	'related_videos' => $relatedVideosData,
	'comments' => $commentData,
	'comCount' => $commentCount,
	'viewCount' => $viewCount,
	'recentView' => $previousRecentView,
	'allVideos' => $allVideos,
	'isFlash' => $isFlash,
	'tags' => $tags,
]);