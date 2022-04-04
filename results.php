<?php
namespace pokTwo;
require('lib/common.php');

$query = isset($_GET['search']) ? $_GET['search'] : null;
$page = (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0 ? $_GET['page'] : 1);

// currently selects all uploaded videos
$videoData = $sql->query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id WHERE v.title LIKE CONCAT('%', ?, '%') OR v.description LIKE CONCAT('%', ?, '%') ORDER BY v.id DESC", [$query, $query]);

$count = $sql->result("SELECT COUNT(*) FROM videos v WHERE v.title LIKE CONCAT('%', ?, '%') OR v.description LIKE CONCAT('%', ?, '%') ORDER BY v.id DESC", [$query, $query]);

$twig = twigloader();

echo $twig->render('results.twig', [
	'videos' => $sql->fetchArray($videoData),
	'query' => $query,
	'page' => $page,
	'count' => $count
]);
