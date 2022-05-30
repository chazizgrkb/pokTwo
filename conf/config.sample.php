<?php
$host = '127.0.0.1';
$db = 'codename-web';
$user = '';
$pass = '';

$tplCache = 'templates/cache';
$tplNoCache = false; // **DO NOT SET AS TRUE IN PROD - DEV ONLY**

$isDebug = true; // **DO NOT SET TO TRUE ON PROD - DEV USE ONLY**

// Array of memcached server(s) for memcache caching. Leave empty to disable memcache caching.
$memcachedServers = [];

$basepath = '/';

$disableRegister = false;

// Should dark mode be default?
$darkModeDefault = false;

// Redirect all pages to https.
$https = true;

// Cookie token name. Don't change this too often as it'll invalidate old logins!
$cookieName = 'token';

// Discord server link. If blank will disable Discord link.
$invite = '';

// URL to Discord webhook for new level uploads. Leave blank to disable this.
$webhook = '';

$lpp = 20;