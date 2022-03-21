<?php
require('lib/common.php');

if (isset($_GET['id'])) {
	$userpagedata = fetch("SELECT * FROM users WHERE id = ?", [$_GET['id']]);
} else if (isset($_GET['user'])) {
	$userpagedata = fetch("SELECT * FROM users WHERE name = ?", [$_GET['user']]);
}

if (!isset($userpagedata) || !$userpagedata) {
	error('404', "No user specified.");
}

$page = (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0 ? $_GET['page'] : 1);
$forceuser = isset($_GET['forceuser']);

$limit = sprintf("LIMIT %s,%s", (($page - 1) * $lpp), $lpp);

// Personal user page stuff
if (isset($userdata['id']) && $userdata['id'] == $userpagedata['id'] && !$forceuser) {
	if ($log && isset($_GET['darkmode'])) {
		$newopt = ($userdata['darkmode'] ? 0 : 1);

		query("UPDATE users SET darkmode = ? WHERE id = ?", [$newopt, $userdata['id']]);
		$userdata['darkmode'] = $newopt;
	}

	if (isset($_GET['markread'])) {
		query("DELETE FROM notifications WHERE recipient = ?", [$userdata['id']]);
		$notificationCount = 0;
	}

	$notifsdata = query("SELECT $userfields n.* FROM notifications n LEFT JOIN users u ON n.sender = u.id WHERE n.recipient = ?", [$userdata['id']]);

	$notifications = [];
	while ($notifdata = $notifsdata->fetch()) {
		switch ($notifdata['type']) {
			case 1:
				$notifications[] = sprintf('%s commented on your level <a href="/level.php?id=%s">%s</a>.', userlink($notifdata, 'u_'), $notifdata['l_id'], $notifdata['l_title']);
			break;
			case 2:
				$notifications[] = sprintf('%s commented on your <a href="/user.php?id=%s&forceuser">user page</a>.', userlink($notifdata, 'u_'), $userdata['id']);
			break;
			case 3:
				$notifications[] = sprintf('%s sent you a private message: <a href="/forum/showprivate.php?id=%s">Read</a>', userlink($notifdata, 'u_'), $notifdata['level']);
			break;
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
				$notifications[] = sprintf(
					'%s mentioned you in a %s comment: <a href="/%s.php?id=%s">Read</a>',
				userlink($notifdata, 'u_'), cmtNumToType($notifdata['type'] - 10), cmtNumToType($notifdata['type'] - 10), $notifdata['level']);
			break;
		}
	}
} else { // general profile details stuff
	if ($userpagedata['about']) {
		$markdown = new Parsedown();
		$markdown->setSafeMode(true);
		$userpagedata['about'] = $markdown->text($userpagedata['about']);
	}

	$comments = query("SELECT $userfields c.* FROM comments c JOIN users u ON c.author = u.id WHERE c.type = 4 AND c.level = ? ORDER BY c.time DESC", [$userpagedata['id']]);

	if (isset($userdata['id']) && $userpagedata['id'] == $userdata['id']) {
		query("DELETE FROM notifications WHERE type = 2 AND recipient = ?", [$userdata['id']]);
	}

	clearMentions('user', $userpagedata['id']);
}

$twig = twigloader();
echo $twig->render('user.twig', [
	'id' => $userpagedata['id'],
	'name' => $userpagedata['name'],
	'userpagedata' => $userpagedata,
	'forceuser' => $forceuser,
	'page' => $page,
	'notifs' => (isset($notifications) ? $notifications : []),
	'markread' => (isset($_GET['markread']) ? true : false),
	'edited' => (isset($_GET['edited']) ? true : false), // TODO: merge these three stuffs into one variable
	'comments' => (isset($comments) ? $comments : null),
	'justbanned' => (isset($_GET['justbanned']) ? $_GET['justbanned'] : null)
]);