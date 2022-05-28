<?php
namespace pokTwo\oldMeta;

/* Back in 2013, YouTube had moved some pages to an alternative layout which did not make
use of the 2013 assets, instead using a newly created CSS stylesheet. However, some pages
were not updated with that layout, and since pokTwo tries to be accurate to the December 
2013 version of YouTube. This shit had to be done. -grkb, May 28, 2022. */

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$isMeta = true;

// Change directory to pokTwo and include core pokTwo code.
chdir('../');
require_once('conf/config.php'); // include pokTwo config
require_once('vendor/autoload.php');
require_once('lib/common.php');

// Change back to forum and include code specific to the "Old meta" section of pokTwo.
chdir('t/');
foreach (glob("lib/*.php") as $filename)
	require_once($filename);