<?php
namespace pokTwo;
require('lib/common.php');

if ($userdata['powerlevel'] < 3) error('403', "You shouldn't be here, get out!");

//$memcachedStats = $cache->memcached->getStats();

$latestRegisteredUsers = $mysql->query("SELECT id, name, joined FROM users ORDER BY joined DESC LIMIT 15");
$latestSeenUsers = $mysql->query("SELECT id, name, lastview FROM users ORDER BY lastview DESC LIMIT 15");
$videoData = $mysql->query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id ORDER BY v.time DESC LIMIT 7");

$thingsToCount = ['comments', 'users', 'videos', 'views', 'messages', 'favorites'];

$query = "SELECT ";
foreach ($thingsToCount as $thing) {
	if ($query != "SELECT ") $query .= ", ";
	$query .= sprintf("(SELECT COUNT(*) FROM %s) %s", $thing, $thing);
}
$count = $mysql->fetch($query);

$latestComments = $mysql->query("SELECT $userfields c.* FROM comments c JOIN users u ON c.author = u.id ORDER BY c.date DESC LIMIT 7");

$twig = twigloader();
echo $twig->render('admin.twig', [
	'latest_registered_users' => $latestRegisteredUsers,
	'latest_seen_users' => $latestSeenUsers,
	'things_to_count' => $thingsToCount,
	'count' => $count,
	'latest_comments' => $latestComments,
	'videos' => $videoData,
]);
