<?php
namespace pokTwo;
require('lib/common.php');
header("Content-type: application/json");

if (isset($_GET['action_create_subscription_to_channel'])) {

$token = Users::getUserIDFromToken($_POST['plid']);

$output[] = [
	'response' => [
		'id' => 'CummingColorsInTheAir!',
	]
];

echo trim(json_encode($output), '[]');
}
?>
