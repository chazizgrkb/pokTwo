<?php
namespace pokTwo;
require ('lib/common.php');

if (isset($_GET['video_id']))
{
    if (result("SELECT * from favorites WHERE video_id = ? AND user_id = ?", [$_GET['video_id'], $userdata['id']]))
    {
        query("DELETE FROM favorites WHERE video_id = ? AND user_id = ?", [$_GET['video_id'], $userdata['id']]);
        echo "<script type='text/javascript'>window.close();</script>";
    }
    else
    {
        die("You've ethier already removed the video or haven't favorited it yet!");
    }
}
else
{
    die("invalid");
}