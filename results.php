<?php

namespace pokTwo;
require('lib/common.php');

$query = $_GET['search'] ?? null;
$page = (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0 ? $_GET['page'] : 1);
$limit = sprintf("LIMIT %s,%s", (($page - 1) * $lpp), $lpp);

// currently selects all uploaded videos
$videoData = $sql->query("
SELECT DISTINCT $userfields $videofields FROM videos v 
	JOIN users u ON v.author = u.id 
	JOIN tag_index ti ON (ti.video_id = v.id) 
	JOIN tag_meta t ON (t.tag_id = ti.tag_id) 	
	WHERE 
		v.title LIKE CONCAT('%', ?, '%') 
	OR 
		v.description LIKE CONCAT('%', ?, '%') 
	OR
		t.name LIKE CONCAT('%', ?, '%') 
ORDER BY v.id DESC $limit", [$query, $query, $query]);
$videos = $sql->fetchArray($videoData);

foreach ($videos as &$video) {
    $video['tags'] = Tags::getVideoTags($video['id']);
}

$count = $sql->result("
SELECT COUNT(DISTINCT v.id) FROM videos v
 	JOIN tag_index ti ON (ti.video_id = v.id) 
	JOIN tag_meta t ON (t.tag_id = ti.tag_id)
	WHERE 
		v.title LIKE CONCAT('%', ?, '%') 
	OR v.description 
		LIKE CONCAT('%', ?, '%') 
	OR
		t.name LIKE CONCAT('%', ?, '%') 
ORDER BY v.id DESC", [$query, $query, $query]);

$twig = twigloader();

echo $twig->render('results.twig', [
    'videos' => $videos,
    'query' => $query,
    'page' => $page,
    'count' => $count,
]);
