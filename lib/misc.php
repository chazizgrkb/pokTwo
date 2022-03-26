<?php

/**
 * Returns true if it is executed from the command-line. (For command-line tools)
 */
function isCli() {
	return php_sapi_name() == "cli";
}

function register($name, $pass, $mail) {
	$token = bin2hex(random_bytes(20));
	query("INSERT INTO users (name, password, email, token, joined) VALUES (?,?,?,?,?)",
		[$name,password_hash($pass, PASSWORD_DEFAULT), $mail, $token, time()]);

	return $token;
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

function die_dump($thingy) {
	die(var_dump($thingy));
	return false;
}

function type_to_relationship($type) {
	return match ($type) {
		'none'		=> 0,
		'single'	=> 1,
		'taken'		=> 2,
		'married'	=> 3,
	};
}

function relationship_to_type($relationship) {
	return match ($relationship) {
		0 => 'none',
		1 => 'single',
		2 => 'taken',
		3 => 'married'
	};
}

function type_to_gender($type) {
	return match ($type) {
		'private'	=> 0,
		'unknown'	=> 1,
		'male'		=> 2,
		'female'	=> 3,
	};
}

function gender_to_type($gender) {
	return match ($gender) {
		0 => 'private',
		1 => 'unknown',
		2 => 'male',
		3 => 'female',
	};
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

function clearMentions($type, $id) {
	global $log, $userdata;

	if ($log) {
		query("DELETE FROM notifications WHERE type = ? AND level = ? AND recipient = ?", [cmtTypeToNum($type) + 10, $id, $userdata['id']]);
	}
}
