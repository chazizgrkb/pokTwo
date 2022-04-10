<?php

namespace pokTwo;
/**
 * Returns true if it is executed from the command-line. (For command-line tools)
 */
function isCli()
{
    return php_sapi_name() == "cli";
}

function closeWindow()
{
    echo "<script type='text/javascript'>window.close();</script>";
}

function randstr($len, $charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-")
{
    return substr(str_shuffle($charset), 0, $len);
}

function delete_directory($dirname): bool
{
    if (is_dir($dirname))
        $dir_handle = opendir($dirname);
    if (!$dir_handle)
        return false;
    while ($file = readdir($dir_handle)) {
        if ($file != "." && $file != "..") {
            if (!is_dir($dirname . "/" . $file))
                unlink($dirname . "/" . $file);
            else
                delete_directory($dirname . '/' . $file);
        }
    }
    closedir($dir_handle);
    rmdir($dirname);
    return true;
}

/**
 * Dump array and stop everything else. Meant for debugging.
 *
 * @param $thingy
 */
function die_dump($thingy)
{
    global $isDebug;
    if ($isDebug) {
        die('<pre>' . var_export($thingy, true) . '</pre>');
    } else {
        trigger_error("Die_dump function called when debug is disabled!", E_USER_WARNING);
        // this is probably a fucking bad idea -grkb 4/9/2022
    }
}

/**
 * Get hash of latest git commit
 *
 * @param bool $trim Trim the hash to the first 7 characters
 * @return string
 */
function gitCommit($trim = true)
{
    global $acmlm;

    $prefix = ($acmlm ? '../' : '');

    $commit = file_get_contents($prefix . '.git/refs/heads/main');

    if ($trim)
        return substr($commit, 0, 7);
    else
        return rtrim($commit);
}

/**
 * Get name of the platform that pokTwo is running on
 *
 * @return string Name of platform. It does NOT specify the Windows/macOS/Linux version.
 */
function getOS(): string
{
    return printf(php_uname('s'));
}

/**
 * Get the IP address of the user. Scandal incoming!
 *
 * @return mixed
 */
function getUserIpAddr()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        //ip from share internet
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
        $ip = $_SERVER['HTTP_CF_CONNECTING_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        //ip pass from proxy
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}