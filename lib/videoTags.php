<?php
namespace pokTwo;
class Tags extends Videos {
	/**
	 * Return a list of tags, Limit and order is required.
	 *
	 * @param string $orderBy A column in the tags tables(?).
	 * @param int $limit The limit.
	 * @return array A tag list, ordered by what $orderBy specified.
	 */
	static function getListOfTags($orderBy, $limit) {
		global $sql;
		$tagList = $sql->query("SELECT t.*, COUNT(t.tag_id) AS use_count FROM tag_index ct LEFT JOIN tag_meta t ON ct.tag_id = t.tag_id GROUP BY ct.tag_id ORDER BY $orderBy LIMIT $limit");
		return $tagList;
	}

	/**
	 * Return a list of tags, Limit and order is required.
	 *
	 * @param string $videoID The ID of the video
	 * @return array The list of tags that the video has.
	 */
	static function getVideoTags($videoID) {
		global $sql;
		$videoTags = $sql->fetchArray($sql->query("SELECT * FROM `tag_index` ti JOIN tag_meta t ON (t.tag_id = ti.tag_id) WHERE ti.video_id = ?", [$videoID]));
		return $videoTags;
	}
}