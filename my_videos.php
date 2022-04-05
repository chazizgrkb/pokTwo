<?php
namespace pokTwo;
require('lib/common.php');

if (!$log) redirect('vidlist.');

$query = isset($_GET['search']) ? $_GET['search'] : null;
$page = (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0 ? $_GET['page'] : 1);

// currently selects all uploaded videos
$videoData = $sql->query("SELECT * FROM videos WHERE author = ?", [$userdata['id']]);

$count = $sql->result("SELECT COUNT(*) FROM videos WHERE author = ?", [$userdata['id']]);

$twig = twigloader();

echo $twig->render('vidlist.twig', [
	'videos' => $sql->fetchArray($videoData),
	'page' => $page,
	'count' => $count,
	'title' => "My Videos",
]);
