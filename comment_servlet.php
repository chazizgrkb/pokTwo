<?php
namespace pokTwo;
require('lib/common.php');
header("Content-type: text/xml");

if (isset($_GET['add_comment'])) {
	
$comment = [
	'u_name' => $userdata['name'],
	'u_customcolor' => $userdata['customcolor'],
	'comment' => $_POST['comment'],
	'date' => time()
];	

$token = Users::getUserIDFromToken($_POST['session_token']);
VideoComments::addComment($_POST['video_id'], $_POST['comment'], $token);

$twig = twigloader();
$theComment = $twig->render('components/comment.twig', ['comment' => $comment]);

echo '<root>
  <str_code>subscription-subscribe-success</str_code>
  <html_content><![CDATA[
		' . $theComment . '
     ]]></html_content>
</root>';
}
?>
