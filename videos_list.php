<?php
require('lib/common.php');

if (isset($_GET['id'])) {
	$userpagedata = fetch("SELECT * FROM users WHERE id = ?", [$_GET['id']]);
} else if (isset($_GET['user'])) {
	$userpagedata = fetch("SELECT * FROM users WHERE name = ?", [$_GET['user']]);
}
	
$latestVideo = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, v.videolength, v.category_id, v.author FROM videos v JOIN users u ON v.author = u.id WHERE author = ? ORDER BY v.id DESC LIMIT 20", [$userpagedata['id']]);
$allVideos = result("SELECT COUNT(id) FROM videos WHERE author=?", [$userpagedata['id']]);

if (!isset($userpagedata) || !$userpagedata) {
	error('404', "No user specified.");
}

$page = (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0 ? $_GET['page'] : 1);
$forceuser = isset($_GET['forceuser']);

if (isset($userpagedata['birthday'])) {
$date = new DateTime($userpagedata['birthday']); // YYYY-MM-DD
$now = new DateTime();
$interval = $now->diff($date);
$age = $interval->y;
} else {
$age = false;
}

// Personal user page stuff
if ($userpagedata['about']) {
	$markdown = new Parsedown();
	$markdown->setSafeMode(true);
	$userpagedata['about'] = $markdown->text($userpagedata['about']);
}

$twig = twigloader();
echo $twig->render('videos_list.twig', [
	'id' => $userpagedata['id'],
	'name' => $userpagedata['name'],
	'latestVideo' => $latestVideo,
	'allVideos' => $allVideos,
	'userpagedata' => $userpagedata,
	'forceuser' => $forceuser,
	'page' => $page,
	'edited' => (isset($_GET['edited']) ? true : false), // TODO: merge these three stuffs into one variable
	'justbanned' => (isset($_GET['justbanned']) ? $_GET['justbanned'] : null),
	'age' => $age,
	'relationship' => relationship_to_type($userpagedata['relationshipStatus']),
	'gender' => gender_to_type($userpagedata['gender']),
]);