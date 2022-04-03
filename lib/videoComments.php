<?php
namespace pokTwo;
class Comments extends Videos {
	function addComment($videoID, $comment, $id) {
		global $mysql;
		$mysql->query("INSERT INTO comments (id, reply_to, comment, author, date, deleted) VALUES (?,?,?,?,?,?)",
		[$videoID, 0, $comment, $id, time(), 0]);
		//[$videoID, $reply_to, $comment, $id, time(), 0]);
	}
}