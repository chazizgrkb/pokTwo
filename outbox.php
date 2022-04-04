<?php
namespace pokTwo;
require('lib/common.php');

if (!$log) redirect('login.php');

$subject = (isset($_GET['subject']) ? $_GET['subject'] : null);

$user = (isset($_GET['user']) ? $_GET['user'] : null);

if (isset($_POST['send'])) {
    $title = (isset($_POST['title']) ? $_POST['title'] : '');
    $message = (isset($_POST['message']) ? $_POST['message'] : '');
	$username = (isset($_POST['user']) ? $_POST['user'] : null);

	$reciever_id = $sql->result("SELECT id from users where name = ?", [$username]);
	
	$sql->query("INSERT INTO messages (sender, reciever, title, text, time) VALUES (?,?,?,?,?)", [$userdata['id'], $reciever_id, $title, $message, time()]);
	
	redirect('my_messages.php?sentMessage=true');
}

$twig = twigloader();
echo $twig->render('outbox.twig', [
	'subject' => $subject,
	'user' => $user,
]);
