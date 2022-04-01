<?php
namespace pokTwo;
class Comments extends Videos {
	function addComment($videoID, $reply_to, $comment, $id) {
		global $mysql;
		$mysql->query("INSERT INTO comments (id, reply_to, comment, author, date, deleted) VALUES (?,?,?,?,?,?)",
		[$videoID, $reply_to, $comment, $id, time(), 0]);
	}
}