<?php
namespace pokTwo;
require('lib/common.php');

if (isset($_POST['video_id']))
{
	Comments::addComment($_POST['video_id'],$_POST['comment'],$userdata['id']);
	closeWindow();
} else {
die("invalid");
}
?>