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
