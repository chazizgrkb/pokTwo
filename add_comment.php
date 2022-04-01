<?php
namespace pokTwo;
require('lib/common.php');

if (isset($_POST['video_id']))
{
	$reply_to = (isset($_POST['reply_to']) ? $_POST['reply_to'] : "");
	$comments->addComment($_POST['video_id'],$reply_to,$_POST['comment'],$userdata['id']);
	closeWindow();
} else {
die("invalid");
}
?>