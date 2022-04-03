<?php
namespace pokTwo;
class Comments extends Videos {
	function addComment($videoID, $comment, $id) {
		global $mysql;
		$mysql->query("INSERT INTO comments (id, comment, author, date, deleted) VALUES (?,?,?,?,?,?)",
		[$videoID, $reply_to, $comment, $id, time(), 0]);
		//[$videoID, $reply_to, $comment, $id, time(), 0]);
	}
}