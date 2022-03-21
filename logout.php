<?php
require('lib/common.php');
setcookie($cookieName, "", time() - 3600);
redirect('./');