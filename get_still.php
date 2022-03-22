<?php
require('lib/common.php');

$video = htmlspecialchars($_GET["video_id"]);

switch ($_GET["still_id"]) {
    case 1:
        $file = "/thumbs/" . $video . ".1.jpg";
		break;
    case 2:
        $file = "/thumbs/" . $video . ".2.jpg";
		break;
    case 3:
        $file = "/thumbs/" . $video . ".3.jpg";
        break;
	default:
		$file = "/img/thumbnail.jpg";
		break;
}

header("Location:". $file);

?>