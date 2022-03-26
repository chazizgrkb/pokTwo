<?php
require ('lib/common.php');

if (isset($_GET['video_id']))
{
    if (!result("SELECT * from favorites WHERE video_id = ? AND user_id = ?", [$_GET['video_id'], $userdata['id']]))
    {
        query("INSERT INTO favorites (video_id, user_id) VALUES (?,?)", [$_GET['video_id'], $userdata['id']]);
        echo "<script type='text/javascript'>window.close();</script>";
    }
    else
    {
        die("You've already favorited this video!");
    }
}
else
{
    die("invalid");
}