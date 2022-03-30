<?php
require('lib/common.php');

$newsid = (isset($_GET['id']) ? $_GET['id'] : 0);

$twig = twigloader();

if (isset($_REQUEST['new']) && $log && $userdata['powerlevel'] > 2) {
	if (isset($_POST['ApOsTaL'])) {
		query("INSERT INTO news (title, text, time, author_userid) VALUES (?,?,?,?)",
			[$_POST['title'], $_POST['text'], time(), $userdata['id']]);

		$insertid = result("SELECT LAST_INSERT_ID()");
		redirect("/news.php?id=$insertid");
	}

	echo $twig->render('admin_news_add.twig');
	die();
} else {
die("bro what the Shit!");
}