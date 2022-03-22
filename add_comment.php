<?php
require('lib/common.php');

if (isset($_POST['video_id']))
{
	$reply_to = (isset($_POST['reply_to']) ? $_POST['reply_to'] : "");
	query("INSERT INTO comments (id, reply_to, comment, author, date, deleted) VALUES (?,?,?,?,?,?)",
	[$_POST['video_id'],$reply_to,$_POST['comment'],$userdata['id'],time(),0]);
	echo "<script type='text/javascript'>window.close();</script>";
} else {
die("invalid");
}
?>