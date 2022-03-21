<?php
require('lib/common.php');
$id = (isset($_GET['video_id']) ? $_GET['video_id'] : null);
$videoData = fetch("SELECT $userfields v.videofile FROM videos v JOIN users u ON v.author = u.id WHERE v.video_id = ?", [$id]);
$file = htmlspecialchars($videoData['videofile']);
$file = substr($file,0,-3);
$file = $file . "flv";

header("Location:". $file);

?>