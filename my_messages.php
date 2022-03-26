<?php
require('lib/common.php');

if (!$log) redirect('login.php');

$sentMessage = (isset($_GET['sentMessage']) ? $_GET['sentMessage'] : null);

$twig = twigloader();

$inboxData = query("SELECT $userfields m.* FROM messages m JOIN users u ON m.sender = u.id WHERE reciever = ? ORDER BY m.time DESC LIMIT 10", [$userdata['id']]);

echo $twig->render('my_messages.twig', [
	'inbox' => $inboxData,
	'sentMessage' => $sentMessage,
]);