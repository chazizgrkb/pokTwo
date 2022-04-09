<?php

namespace pokTwo;
require('lib/common.php');
$id = ($_GET['video_id'] ?? null);

header("Location:" . Videos::getFlashVideo($id));

?>