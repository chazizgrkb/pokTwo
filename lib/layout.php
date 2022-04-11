<?php

namespace pokTwo;

use RelativeTime\RelativeTime;
use Twig\Environment;
use Twig\Extension\DebugExtension;
use Twig\Loader\FilesystemLoader;

/**
 * Twig loader, initializes Twig with standard configurations and extensions.
 *
 * @param string $subfolder Subdirectory to use in the templates/ directory.
 * @return Environment Twig object.
 */
function twigloader($subfolder = '', $customloader = null, $customenv = null) {
    global $tplCache, $tplNoCache, $userdata, $notificationCount, $isDebug, $messages, $log, $lpp, $https, $pageName, $searchShit, $versionString, $domain;

    $doCache = ($tplNoCache ? false : $tplCache);

    if (!isset($customloader)) {
        $loader = new FilesystemLoader('templates/' . $subfolder);
    } else {
        $loader = $customloader();
    }

    if (!isset($customenv)) {
        $twig = new Environment($loader, [
            'cache' => $doCache,
            'debug' => $isDebug,
        ]);
    } else {
        $twig = $customenv($loader, $doCache);
    }

    // Add pokTwo specific extension
    $twig->addExtension(new PokTwoExtension());
    if ($isDebug) $twig->addExtension(new DebugExtension());

    $twig->addGlobal('userdata', $userdata);
    $twig->addGlobal('message_count', $messages);
    $twig->addGlobal('log', $log);
    $twig->addGlobal('pageName', $pageName);
    $twig->addGlobal('searchText', $searchShit);
    // START OF CODE PORTED FROM SQUAREBRACKET
	$twig->addGlobal("page_url", sprintf("%s%s", $domain, $_SERVER['REQUEST_URI']));
	$twig->addGlobal("domain", $domain);
    // END OF PORTED CODE
    $twig->addGlobal('glob_lpp', $lpp);
    $twig->addGlobal('version', $versionString);

    return $twig;
}

function comments($cmnts, $type, $id): string
{
    $twig = twigloader('components');
    return $twig->render('comment.twig', ['cmnts' => $cmnts, 'type' => $type, 'id' => $id]);
}

function pagination($levels, $lpp, $url, $current): string
{
    $twig = twigloader('components');
    return $twig->render('pagination.twig', ['levels' => $levels, 'lpp' => $lpp, 'url' => $url, 'current' => $current]);
}

function error($title, $message)
{
    $twig = twigloader();

    echo $twig->render('_error.twig', ['err_title' => $title, 'err_message' => $message]);
    die();
}

function relativeTime($time): string
{
    $relativeTime = new RelativeTime([
        'language' => '\RelativeTime\Languages\English',
        'separator' => ', ',
        'suffix' => true,
        'truncate' => 1,
    ]);

    return $relativeTime->timeAgo($time);
}

function redirect($url)
{
    header(sprintf('Location: %s', $url));
    die();
}
