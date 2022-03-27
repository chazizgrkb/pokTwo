<?php
require('lib/common.php');

if ($userdata['powerlevel'] < 3) error('403', "You shouldn't be here, get out!");

//$memcachedStats = $cache->memcached->getStats();

$latestRegisteredUsers = query("SELECT id, name, customcolor, joined FROM users ORDER BY joined DESC LIMIT 7");
$latestSeenUsers = query("SELECT id, name, customcolor, lastview FROM users ORDER BY lastview DESC LIMIT 7");
$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, (SELECT COUNT(*) FROM views WHERE video_id = v.video_id) AS views, (SELECT COUNT(*) FROM comments WHERE id = v.video_id) AS comments, (SELECT COUNT(*) FROM favorites WHERE video_id = v.video_id) AS favorites, v.videolength, v.category_id, v.author FROM videos v JOIN users u ON v.author = u.id ORDER BY v.time DESC LIMIT 5");

$thingsToCount = ['comments', 'users', 'videos', 'views', 'messages', 'favorites'];

$query = "SELECT ";
foreach ($thingsToCount as $thing) {
	if ($query != "SELECT ") $query .= ", ";
	$query .= sprintf("(SELECT COUNT(*) FROM %s) %s", $thing, $thing);
}
$count = fetch($query);

$latestComments = query("SELECT $userfields c.* FROM comments c JOIN users u ON c.author = u.id ORDER BY c.date DESC LIMIT 7");

$twig = twigloader();
echo $twig->render('admin.twig', [
	'latest_registered_users' => $latestRegisteredUsers,
	'latest_seen_users' => $latestSeenUsers,
	'things_to_count' => $thingsToCount,
	'count' => $count,
	'latest_comments' => $latestComments,
	'videos' => $videoData,
]);
