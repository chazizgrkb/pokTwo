<?php

namespace pokTwo;
$version = "0.02";
$revision = "r0";

$versionString = $version . $revision;

if (!file_exists('conf/config.php')) {
    die('Please read the installing instructions in the README file.');
}

// load profiler first
require_once('lib/profiler.php');
$profiler = new Profiler();

require_once('conf/config.php');
require_once('vendor/autoload.php');
foreach (glob("lib/*.php") as $file) {
    require_once($file);
}

if ($isDebug) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}

// Holy shit! Classes!
$sql = new MySQL($host, $user, $pass, $db);

//tf does this do?
if (!empty($blockedUA) && isset($_SERVER['HTTP_USER_AGENT'])) {
    foreach ($blockedUA as $bl) {
        if (str_contains($_SERVER['HTTP_USER_AGENT'], $bl)) {
            http_response_code(403);
            echo '403';
            die();
        }
    }
}

// Redirect all pages to https if https is enabled.
if (!isCli() && $https && !isset($_SERVER['HTTPS'])) {
    header("Location: https://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"], true, 301);
    die();
}

$userfields = Users::userfields();
$videofields = Videos::videofields();

if (!isCli()) {
    $ipban = $sql->fetch("SELECT * FROM ipbans WHERE ? LIKE ip", [$_SERVER['REMOTE_ADDR']]);
    if ($ipban) {
        http_response_code(403);

        printf(
            "<p>Your IP address has been banned.</p>" .
            "<p><strong>Reason:</strong> %s</p>",
            $ipban['reason']);

        die();
    }
}

// Unset legacy authentication cookies for security purposes. This will hopefully delete it from browsers and clients.
if (isset($_COOKIE['user'])) setcookie('user', 'DEPRECATED', 1, '/');
if (isset($_COOKIE['passenc'])) setcookie('passenc', 'DEPRECATED', 1, '/');

// Authentication code.
if (isset($_COOKIE[$cookieName])) {
    $id = $sql->result("SELECT id FROM users WHERE token = ?", [$_COOKIE[$cookieName]]);

    if ($id) {
        // Valid password cookie.
        $log = true;
    } else {
        // Invalid password cookie.
        $log = false;
    }
} else {
    // No password cookie.
    $log = false;
}

if ($log) {
    $userdata = $sql->fetch("SELECT * FROM users WHERE id = ?", [$id]);

    if ($userdata['powerlevel'] == 0) {
        $userdata['banreason'] = $sql->result("SELECT reason FROM bans WHERE user = ?", [$id]);
    }
} else {
    $userdata['powerlevel'] = 1;
    $userdata['darkmode'] = $darkModeDefault;
}

if (!$log || !$userdata['timezone'])
    $userdata['timezone'] = 'America/New_York'; // I'm a self-centered egomaniac! Time itself centers around me!

date_default_timezone_set($userdata['timezone']);
