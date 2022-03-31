<?php
namespace pokTwo;
require ('lib/common.php');

function getRecommended($videoID) {
global $userfields;
$intID = result("SELECT id FROM videos WHERE video_id = ?", [$videoID]);
	$initalList = fetchArray(query("SELECT
    jaccard.video_id,
    jaccard.intersect,
    jaccard.union,
    jaccard.intersect / jaccard.union AS 'jaccard index'
FROM
    (
    SELECT
        c2.video_id AS video_id,
        COUNT(ct2.tag_id) AS 'intersect',
        (
        SELECT
            COUNT(DISTINCT ct3.tag_id)
        FROM
            tag_index ct3
        WHERE
            ct3.video_id IN(c1.id, c2.id)
    ) AS 'union'
FROM
    videos AS c1
INNER JOIN videos AS c2
ON
    c1.id != c2.id
LEFT JOIN tag_index AS ct1
ON
    ct1.video_id = c1.id
LEFT JOIN tag_index AS ct2
ON
    ct2.video_id = c2.id AND ct1.tag_id = ct2.tag_id
WHERE
    c1.id = ?
GROUP BY
    c1.id,
    c2.id
) AS jaccard
ORDER BY
    jaccard.intersect / jaccard.union
DESC
LIMIT 20;", [$intID]));
$videoList = array();
foreach ($initalList as $row) {
	$videoData = fetchArray(query("SELECT $userfields v.* FROM videos v JOIN users u ON v.author = u.id WHERE v.video_id = ?", [$row['video_id']]));
	array_push($videoList, $videoData);
}
	die_dump($videoList);
	return $videoList;
}