<?php

namespace pokTwo;
require('lib/common.php');

$id = ($_GET['v'] ?? null);
$searchShit = ($_GET['search'] ?? null);
$ip = getUserIpAddr();

$videoData = Videos::getVideoData($userfields, $id);

if (!$videoData) playerError("This video does not exist.");

$commentData = VideoComments::getComments($id);

$pageName = "watch";
$jsPageName = "watch";
$cssGarbage = "watch clearfix";
$guideCollapsed = true;

$allVideos = $sql->result("SELECT COUNT(id) FROM videos WHERE author=?", [$videoData['u_id']]);

if ($sql->fetch("SELECT COUNT(video_id) FROM views WHERE video_id=? AND user=?", [$videoData['video_id'], crypt($ip, $ip)]) ['COUNT(video_id)'] < 1) {
    $sql->query("INSERT INTO views (video_id, user) VALUES (?,?)", [$videoData['video_id'], crypt($ip, $ip)]);
}

if ($log) {
    if ($sql->result("SELECT * from favorites WHERE video_id = ? AND user_id = ?", [$videoData['video_id'], $userdata['id']])) {
        $isFavorited = true;
    } else {
        $isFavorited = false;
    }
	// this is a bit retarded.
	if ($sql->result("SELECT video_id from videos WHERE video_id = ? AND author = ?", [$videoData['video_id'], $userdata['id']])) {
        $isVideoOwnedByCurrentUser = true;
    } else {
        $isVideoOwnedByCurrentUser = false;
    }
	$subscribed = result("SELECT COUNT(user) FROM subscriptions WHERE id=? AND user=?", [$userdata['id'], $videoData['author']]);
} else {
    $isFavorited = false;
	$isVideoOwnedByCurrentUser = false;
	$subscribed = 0;
}

$previousRecentView = $sql->result("SELECT most_recent_view from videos WHERE video_id = ?", [$id]);

Videos::bumpVideo(time(), $id);

$twig = twigloader();
echo $twig->render('watch.twig', [
    'video' => $videoData,
    'recentView' => $previousRecentView,
    'allVideos' => $allVideos,
    'recommended' => Videos::getRecommended($videoData['video_id']),
    'isFavorited' => $isFavorited,
	'videoOwnershipFuckery' => $isVideoOwnedByCurrentUser,
	'subscribed' => $subscribed,
]);