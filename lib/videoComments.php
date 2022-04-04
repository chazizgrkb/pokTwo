<?php
namespace pokTwo;
class Comments extends Videos {
	static function addComment($videoID, $comment, $id) {
		global $sql;
		$sql->query("INSERT INTO comments (id, reply_to, comment, author, date, deleted) VALUES (?,?,?,?,?,?)",
		[$videoID, 0, $comment, $id, time(), 0]);
		//[$videoID, $reply_to, $comment, $id, time(), 0]);
	}
}