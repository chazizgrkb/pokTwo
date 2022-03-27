<?php
require ('lib/common.php');
$id = (isset($_GET['v']) ? $_GET['v'] : null);
$searchShit = (isset($_GET['search']) ? $_GET['search'] : null);
$ip = (isset($_SERVER['HTTP_CLIENT_IP']) ? $_SERVER['HTTP_CLIENT_IP'] : (isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']));

$videoData = fetch("SELECT $userfields v.* FROM videos v JOIN users u ON v.author = u.id WHERE v.video_id = ?", [$id]);

$intid = $videoData['id'];

if (!$videoData) error('404', "The video you were looking for cannot be found.");

$query = '';
$count = 0;
$commentData = query("SELECT $userfields c.comment_id, c.id, c.comment, c.author, c.date, c.deleted, (SELECT COUNT(reply_to) FROM comments WHERE reply_to = c.comment_id) AS replycount FROM comments c JOIN users u ON c.author = u.id WHERE c.id = ? ORDER BY c.date DESC", [$id]);

//$relatedVideosData = query("select jaccard.title, jaccard.video_id, jaccard.intersect, jaccard.union, jaccard.intersect/jaccard.union as 'jaccard index' from (select c2.title as title ,c2.video_id as video_id ,count(ct2.tag_id) as 'intersect' ,(select count(distinct ct3.tag_id) from tag_index ct3 where ct3.video_id in(c1.id, c2.id)) as 'union' from videos as c1 inner join videos as c2 on c1.id != c2.id left join tag_index as ct1 on ct1.video_id = c1.id left join tag_index as ct2 on ct2.video_id = c2.id and ct1.tag_id = ct2.tag_id where c1.id = ? group by c1.id, c2.id) as jaccard order by jaccard.intersect/jaccard.union desc limit 20;", [$intid]);

$allVideos = result("SELECT COUNT(id) FROM videos WHERE author=?", [$videoData['u_id']]);

if (fetch("SELECT COUNT(video_id) FROM views WHERE video_id=? AND user=?", [$videoData['video_id'], crypt($ip, "salt, used to encrypt stuff is very important.") ]) ['COUNT(video_id)'] < 1)
{
    query("INSERT INTO views (video_id, user) VALUES (?,?)", [$videoData['video_id'], crypt($ip, "salt, used to encrypt stuff is very important.") ]);
}

if ($log) {
	if (result("SELECT * from favorites WHERE video_id = ? AND user_id = ?", [$videoData['video_id'], $userdata['id']]))
	{
		$isFavorited = true;
	}
	else
	{
		$isFavorited = false;
	}
} else {
	$isFavorited = false;
}

if (isset($_GET['flash']) ? $_GET['flash'] : null)
{
    $isFlash = true;
}
else
{
    $isFlash = false;
}

$commentCount = fetch("SELECT COUNT(id) FROM comments WHERE id=?", [$videoData['video_id']]) ['COUNT(id)'];
$favoritesCount = fetch("SELECT COUNT(user_id) FROM favorites WHERE user_id=?", [$videoData['u_id']]) ['COUNT(user_id)'];
$viewCount = fetch("SELECT COUNT(video_id) FROM views WHERE video_id=?", [$videoData['video_id']]) ['COUNT(video_id)'];

$tags = fetchArray(query("SELECT * FROM `tag_index` ti JOIN tag_meta t ON (t.tag_id = ti.tag_id) WHERE ti.video_id = ?", [$videoData['id']]));

query("UPDATE videos SET views = views + '1' WHERE video_id = ?", [$id]);

$previousRecentView = result("SELECT most_recent_view from videos WHERE video_id = ?", [$id]);
$currentTime = time();

query("UPDATE videos SET most_recent_view = ? WHERE video_id = ?", [$currentTime, $id]);

$twig = twigloader();
echo $twig->render('watch.twig', [
	'video' => $videoData,
	//'related_videos' => $relatedVideosData,
	'comments' => $commentData,
	'favorites' => $favoritesCount,
	'comCount' => $commentCount,
	'viewCount' => $viewCount,
	'recentView' => $previousRecentView,
	'allVideos' => $allVideos,
	'isFlash' => $isFlash,
	'tags' => $tags,
	'isFavorited' => $isFavorited,
]);