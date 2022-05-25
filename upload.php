<?php

namespace pokTwo;
require('lib/common.php');

if (!$log) {
	redirect('login.php');
} else {
	redirect('my_videos_upload');
}