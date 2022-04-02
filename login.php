<?php
namespace pokTwo;
require('lib/common.php');

if (isset($_POST['logout'])) {
	setcookie($cookieName, '');
	redirect('./');
}

if ($log) redirect('./');

$error = '';

if (isset($_GET['resetted'])) $error .= 'Password successfully reset! Please login with your new password.';

if (isset($_POST['field_command'])) {
	$name = (isset($_POST['field_login_username']) ? $_POST['field_login_username'] : null);
	$pass = (isset($_POST['field_login_password']) ? $_POST['field_login_password'] : null);

	$logindata = $mysql->fetch("SELECT id,password,token FROM users WHERE name = ?", [$name]);

	if (!$name || !$pass || !$logindata || !password_verify($pass, $logindata['password'])) $error .= 'Invalid credentials.';

	if ($error == '') {
		setcookie($cookieName, $logindata['token'], 2147483647);
		$nid = $mysql->result("SELECT id FROM users WHERE token = ?", [$logindata['token']]);
		$mysql->query("UPDATE users SET lastview = ?, ip = ? WHERE id = ?", [time(), $_SERVER['REMOTE_ADDR'], $nid]);

		redirect('./');
	}
}

$twig = twigloader();
echo $twig->render('login.twig', ['error' => $error]);

// sex 😳😳😳😳😳😳
