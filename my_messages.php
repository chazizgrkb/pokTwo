<?php

namespace pokTwo;
require('lib/common.php');

if (!$log) redirect('login.php');
$page = (isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] > 0 ? $_GET['page'] : 1);
$limit = sprintf("LIMIT %s,%s", (($page - 1) * $lpp), $lpp);

$pageName = "myMessages";

$sentMessage = ($_GET['sentMessage'] ?? null);

$twig = twigloader();

$inboxData = $sql->fetchArray($sql->query("SELECT $userfields m.* FROM messages m JOIN users u ON m.sender = u.id WHERE reciever = ? ORDER BY m.time DESC $limit", [$userdata['id']]));

foreach ($inboxData as &$message) {
    $message['latest_video'] = Videos::getLatestVideo($message['u_id']);
}

$count = $sql->result("SELECT COUNT(*) FROM messages m WHERE reciever = ?", [$userdata['id']]);

echo $twig->render('my_messages.twig', [
    'inbox' => $inboxData,
    'sentMessage' => $sentMessage,
	'page' => $page,
    'count' => $count,
]);