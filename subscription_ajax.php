<?php
namespace pokTwo;
require('lib/common.php');
header("Content-type: application/json");

/* You might be asking, How does this even work?

squareBracket already had code meant for managing subscriptions when someone clicked
the subscribe button, but its JS for its Finalium frontend is not like YouTube 2013's JS.

YouTube's JS expects a response in JSON with some random ID bullshit embedded in an object(?).
oh and it has some sort of stuff regarding AJAX tokens which I assume might have something to
do with multiple accounts per user??? I don't know, we don't do that here.

-grkb, May 6th 2022.

*/

if (isset($_GET['action_create_subscription_to_channel'])) { // make subscription
	$id = $sql->result("SELECT id FROM users WHERE name = ?", [$_GET['c']]); // the "c" query parameter is the username, we work with IDs in the DB, so we need to get the user ID.
	if (!$sql->result("SELECT COUNT(user) FROM subscriptions WHERE user=? AND id=?", [$id, $userdata['id']]) > 0) { // checks if user is already subscribed.
	$sql->query("INSERT INTO subscriptions (user, id) VALUES (?,?)", [$id, $userdata['id']]); // adds subcription in the DB.
	}

	// response id is apparantly used for unsubcriptions and stuff, we will just use the user id.
	$output[] = [
		'response' => [
			'id' => $id,
		]
	];

} elseif (isset($_GET['action_remove_subscriptions'])) {
	$sql->query("DELETE FROM subscriptions WHERE user=? AND id=?", [$id, $userdata['id']]); // removes subcription in the DB, don't think we need a check.
	
	$output[] = [
		'response' => [
			'id' => $id,
		]
	];
} elseif (isset($_GET['action_get_subscription_preferences_overlay'])) {
	// major rule while coding for poktwo, if the ajax output htmls, then use twig just like anywhere else.
	$twig = twigloader();

	$output[] = [
		'content_html' => $twig->render('subscription_settings.twig'),
	];
}
	

echo trim(json_encode($output), '[]');
?>
