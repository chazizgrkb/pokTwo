<?php
namespace pokTwo;
require('lib/common.php');

$pageName = "profile";

if (isset($_GET['id'])) {
	$userpagedata = $mysql->fetch("SELECT * FROM users WHERE id = ?", [$_GET['id']]);
} else if (isset($_GET['user'])) {
	$userpagedata = $mysql->fetch("SELECT * FROM users WHERE name = ?", [$_GET['user']]);
}

if (!isset($userpagedata) || !$userpagedata) {
	error('404', "No user specified.");
}

$forceuser = isset($_GET['forceuser']);

if (isset($userpagedata['birthday'])) {
	$age = $users->getAge($userpagedata['birthday']);
} else {
	$age = false;
}

// Personal user page stuff
if ($userpagedata['about']) {
	$markdown = new \Parsedown();
	$markdown->setSafeMode(true);
	$userpagedata['about'] = $markdown->text($userpagedata['about']);
}

$twig = twigloader();
echo $twig->render('profile.twig', [
	'id' => $userpagedata['id'],
	'name' => $userpagedata['name'],
	'latestVideo' => $videos->fetchVideos("author", $userpagedata['id'], "v.id DESC", 1),
	'allVideos' => $users->getUserVideoCount($userpagedata['id']),
	'allFavorites' => $users->getUserFavoriteCount($userpagedata['id']),
	'userpagedata' => $userpagedata,
	'forceuser' => $forceuser,
	'edited' => (isset($_GET['edited']) ? true : false), // TODO: merge these three stuffs into one variable
	'justbanned' => (isset($_GET['justbanned']) ? $_GET['justbanned'] : null),
	'age' => $age,
	'relationship' => $users->relationship_to_type($userpagedata['relationshipStatus']),
	'gender' => $users->gender_to_type($userpagedata['gender']),
]);