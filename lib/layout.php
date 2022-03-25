<?php

/**
 * Twig loader, initializes Twig with standard configurations and extensions.
 *
 * @param string $subfolder Subdirectory to use in the templates/ directory.
 * @return \Twig\Environment Twig object.
 */
function twigloader($subfolder = '', $customloader = null, $customenv = null) {
	global $tplCache, $tplNoCache, $userdata, $notificationCount, $log, $lpp, $forumEnabled, $invite, $showSmallHeader, $page, $searchShit;

	$doCache = ($tplNoCache ? false : $tplCache);

	if (!isset($customloader)) {
		$loader = new \Twig\Loader\FilesystemLoader('templates/' . $subfolder);
	} else {
		$loader = $customloader();
	}

	if (!isset($customenv)) {
		$twig = new \Twig\Environment($loader, [
			'cache' => $doCache,
		]);
	} else {
		$twig = $customenv($loader, $doCache);
	}

	// Add principia-web specific extension
	$twig->addExtension(new pokTwoExtension());

	$twig->addGlobal('userdata', $userdata);
	$twig->addGlobal('notification_count', $notificationCount);
	$twig->addGlobal('log', $log);
	$twig->addGlobal('smallHeader', $showSmallHeader);
	$twig->addGlobal('page', $page);
	$twig->addGlobal('searchText', $searchShit);

	return $twig;
}

function comments($cmnts, $type, $id) {
	$twig = twigloader('components');
	return $twig->render('comment.twig', ['cmnts' => $cmnts, 'type' => $type, 'id' => $id]);
}

function pagination($levels, $lpp, $url, $current) {
	$twig = twigloader('components');
	return $twig->render('pagination.twig', ['levels' => $levels, 'lpp' => $lpp, 'url' => $url, 'current' => $current]);
}

function error($title, $message) {
	global $acmlm;

	if ($acmlm)
		$twig = _twigloader();
	else
		$twig = twigloader();

	echo $twig->render('_error.twig', ['err_title' => $title, 'err_message' => $message]);
	die();
}

function relativeTime($time) {
	$relativeTime = new \RelativeTime\RelativeTime([
		'language' => '\RelativeTime\Languages\English',
		'separator' => ', ',
		'suffix' => true,
		'truncate' => 1,
	]);

	return $relativeTime->timeAgo($time);
}

function redirect($url) {
	header(sprintf('Location: %s', $url));
	die();
}
