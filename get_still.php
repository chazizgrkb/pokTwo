<?php

namespace pokTwo;
require('lib/common.php');

$video = htmlspecialchars($_GET["video_id"]);

$thumb = "thumbs/" . $video . ".2.jpg";


if (isset($_GET['still_id'])) {
    switch ($_GET["still_id"]) {
        case 1:
            $thumb = "thumbs/" . $video . ".1.jpg";
            break;
        case 2:
            $thumb = "thumbs/" . $video . ".2.jpg";
            break;
        case 3:
            $thumb = "thumbs/" . $video . ".3.jpg";
            break;
        default:
            $file = "img/thumbnail.jpg";
            break;
    }
}

if (file_exists($thumb)) {
    $file = $thumb;
} else {
    $file = "/img/thumbnail.jpg";
}

header("Location:" . $file);

?>