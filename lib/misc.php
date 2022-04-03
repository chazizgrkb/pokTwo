<?php
namespace pokTwo;
/**
 * Returns true if it is executed from the command-line. (For command-line tools)
 */
function isCli() {
	return php_sapi_name() == "cli";
}

function register($name, $pass, $mail) {
        global $mysql;
	$token = bin2hex(random_bytes(20));
	$mysql->query("INSERT INTO users (name, password, email, token, joined) VALUES (?,?,?,?,?)",
		[$name,password_hash($pass, PASSWORD_DEFAULT), $mail, $token, time()]);

	return $token;
}

function closeWindow() {
	echo "<script type='text/javascript'>window.close();</script>";
	return true;
}

function randstr($len, $charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"){
    return substr(str_shuffle($charset),0,$len);
}

function delete_directory($dirname) {
         if (is_dir($dirname))
           $dir_handle = opendir($dirname);
     if (!$dir_handle)
          return false;
     while($file = readdir($dir_handle)) {
           if ($file != "." && $file != "..") {
                if (!is_dir($dirname."/".$file))
                     unlink($dirname."/".$file);
                else
                     delete_directory($dirname.'/'.$file);
           }
     }
     closedir($dir_handle);
     rmdir($dirname);
     return true;
}

/**
 * Dump array and stop everything else. Meant for debugging.
 *
 * @param string $thingy Trim the hash to the first 7 characters
 * @return false
 */
function die_dump($thingy) {
	die('<pre>' . var_export($thingy, true) . '</pre>');
	return false;
}

/**
 * Get hash of latest git commit
 *
 * @param bool $trim Trim the hash to the first 7 characters
 * @return void
 */
function gitCommit($trim = true) {
	global $acmlm;

	$prefix = ($acmlm ? '../' : '');

	$commit = file_get_contents($prefix.'.git/refs/heads/main');

	if ($trim)
		return substr($commit, 0, 7);
	else
		return rtrim($commit);
}
