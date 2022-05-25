<?php
namespace pokTwo\Meta;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$acmlm = true;

// Change directory to pokTwo and include core pokTwo code.
chdir('../');
require_once('conf/config.php'); // include pokTwo config
require_once('vendor/autoload.php');
require_once('lib/common.php');

// Change back to forum and include code specific to the Meta section of pokTwo.
chdir('pt/');
foreach (glob("lib/*.php") as $filename)
	require_once($filename);