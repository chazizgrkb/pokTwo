<?php

namespace pokTwo;
require('lib/common.php');

if (!$log) redirect('login.php');

$subject = ($_GET['subject'] ?? null);

$user = ($_GET['user'] ?? null);

if (isset($_POST['send'])) {
    $title = ($_POST['title'] ?? '');
    $message = ($_POST['message'] ?? '');
    $username = ($_POST['user'] ?? null);

    $reciever_id = $sql->result("SELECT id from users where name = ?", [$username]);

    $sql->query("INSERT INTO messages (sender, reciever, title, text, time) VALUES (?,?,?,?,?)", [$userdata['id'], $reciever_id, $title, $message, time()]);

    redirect('my_messages.php?sentMessage=true');
}

$twig = twigloader();
echo $twig->render('outbox.twig', [
    'subject' => $subject,
    'user' => $user,
]);
