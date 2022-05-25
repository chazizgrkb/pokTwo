<?php

namespace pokTwo;
require('lib/common.php');

$id = ($_GET['v'] ?? null);
$searchShit = ($_GET['search'] ?? null);
$ip = getUserIpAddr();

$videoData = Videos::getVideoData($userfields, $id);

if (!$videoData) playerError("This video does not exist.");

/* $fmt_stream_map = [
	[
    "sig" => "44AA40D8A104309AE6E672CB78343D5F99ADA807.9ACF6ABD0873E6AA01C34B5489E53C0EF139D534",
	"fallback_host" => "fuckyou.google.com",
    "quality" => "small",
	"itag" => "133",
    "url" => 'media/' . $_GET['v'] . '.mp4',
    "type" => "video/mp4; codecs=\"avc1.4d002a\""
	],
	[
    "sig" => "44AA40D8A104309AE6E672CB78343D5F99ADA807.9ACF6ABD0873E6AA01C34B5489E53C0EF139D534",
	"fallback_host" => "fuckyou.google.com",
    "quality" => "small",
	"itag" => "5",
    "url" => 'media/' . $_GET['v'] . '.flv',
    "type" => "video/x-flv;"
	],
];
$count = 0;
$url_encoded_fmt_stream_map;
foreach($fmt_stream_map as $stream) {
    if($count == 0) {
        $url_encoded_fmt_stream_map = http_build_query($stream);
    } else {
        $url_encoded_fmt_stream_map = $url_encoded_fmt_stream_map . "," . http_build_query($stream);
	}
    $count++;
}

$adaptive_fmts = 'type%3Dvideo%252Fmp4%2Bcodecs%3D%2522avc1.4d401e%2522%26index%3D708-1471%26itag%3D133%26bitrate%3D2208158%26size%3D320x240%26url%3Dmedia%252F' . $_GET['v'] . '.mp4';

$url_encoded_fmt_stream_map = str_replace("&","\u0026",$url_encoded_fmt_stream_map); */

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
} else {
    $isFavorited = false;
	$isVideoOwnedByCurrentUser = false;
}

if (isset($_COOKIE['useFlashPlayer'])) {
    $isFlash = $_COOKIE['useFlashPlayer'];
} elseif ($_GET['flash'] ?? null) {
    $isFlash = true;
} else {
    $isFlash = false;
}

$favoritesCount = $sql->fetch("SELECT COUNT(user_id) FROM favorites WHERE user_id=?", [$videoData['u_id']]) ['COUNT(user_id)'];
$viewCount = $sql->fetch("SELECT COUNT(video_id) FROM views WHERE video_id=?", [$videoData['video_id']]) ['COUNT(video_id)'];

$previousRecentView = $sql->result("SELECT most_recent_view from videos WHERE video_id = ?", [$id]);

Videos::bumpVideo(time(), $id);

$twig = twigloader();
echo $twig->render('watch.twig', [
    'video' => $videoData,
    'favorites' => $favoritesCount,
    'viewCount' => $viewCount,
    'recentView' => $previousRecentView,
    'allVideos' => $allVideos,
    'isFlash' => $isFlash,
    'tags' => VideoTags::getVideoTags($videoData['id']),
    'isFavorited' => $isFavorited,
/* 	'url_encoded_fmt_stream_map' => $url_encoded_fmt_stream_map,
	'adaptive_fmts' => $adaptive_fmts, */
    'recommendedNumber' => Videos::countRecommended($videoData['video_id']),
	'videoOwnershipFuckery' => $isVideoOwnedByCurrentUser,
]);