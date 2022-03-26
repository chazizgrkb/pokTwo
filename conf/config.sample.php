<?php
$host = '127.0.0.1';
$db   = 'codename-web';
$user = '';
$pass = '';

$tplCache = 'templates/cache';
$tplNoCache = false; // **DO NOT SET AS TRUE IN PROD - DEV ONLY**

// Array of memcached server(s) for memcache caching. Leave empty to disable memcache caching.
$memcachedServers = [];

$basepath = '/';

$tplCache = 'templates/cache';
$tplNoCache = true; // **DO NOT SET AS TRUE IN PROD - DEV ONLY**

$forumEnabled = true;

// Should dark mode be default?
$darkModeDefault = false;

// Redirect all pages to https.
$https = false;

// Cookie token name. Don't change this too often as it'll invalidate old logins!
$cookieName = 'token';

// Website domain.
$domain = 'https://codenameweb.domain';

// Discord server link. If blank will disable Discord link.
$invite = '';

// URL to Discord webhook for new level uploads. Leave blank to disable this.
$webhook = '';

$lpp = 20;