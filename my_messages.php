<?php
require('lib/common.php');

$twig = twigloader();

$inboxData = query("SELECT $userfields m.* FROM messages m JOIN users u ON m.sender = u.id WHERE reciever = ? LIMIT 10", [$userdata['id']]);

echo $twig->render('my_messages.twig', [
	'inbox' => $inboxData,
]);