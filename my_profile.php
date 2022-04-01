<?php
namespace pokTwo;
require('lib/common.php');

if (!$log) redirect('login.php');

$pageName = "settings";

$coppaYearBS = date('Y') - 13;

$birthday = explode('-', $userdata['birthday']);

if (isset($_POST['magic'])) {
	$title			= $_POST['title'] ? $_POST['title'] : null;
	$about			= $_POST['about'] ? $_POST['about'] : null;
	$location		= $_POST['location'] ? $_POST['location'] : null;
	$signature		= $_POST['signature'] ? $_POST['signature'] : null;
	$timezone		= $_POST['timezone'] != 'America/New_York' ? $_POST['timezone'] : null;
	$year			= $_POST['year'] ? $_POST['year'] : null;
	$month			= $_POST['month'] ? $_POST['month'] : null;
	$day			= $_POST['day'] ? $_POST['day'] : null;
	$relationship	= $_POST['relationship'] ? $_POST['relationship'] : null;
	$gender			= $_POST['gender'] ? $_POST['gender'] : null;
	
	$relationStatus = type_to_relationship($relationship);
	$genderShit = type_to_gender($gender);
	
	$dob = strtotime($year . "-" . $month . "-" . $day);
	$dob = date('Y-m-d',$dob);
	
	// this is in case one of those numberblock bfdi kids has enough knowledge in inspect element -grkb 3/26/2022
	if ($year > $coppaYearBS) {
		die("Nice try, child.");
	}
	
	// extremely long, i know.  -grkb 3/26/2022
	if (!preg_match("/^((((19|[2-9]\d)\d{2})\-(0[13578]|1[02])\-(0[1-9]|[12]\d|3[01]))|(((19|[2-9]\d)\d{2})\-(0[13456789]|1[012])\-(0[1-9]|[12]\d|30))|(((19|[2-9]\d)\d{2})\-02\-(0[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))\-02\-29))$/", $dob)) {
		die("Invalid date.");
	}

	query("UPDATE users SET title = ?, customcolor = ?, about = ?, location = ?, timezone = ?, signature = ?, birthday = ?, relationshipStatus = ?, gender = ? WHERE id = ?",
		[$title, $customcolor, $about, $location, $timezone, $signature, $dob, $relationStatus, $genderShit, $userdata['id']]);

	redirect(sprintf("/profile.php?user=%s&edited", $userdata['name']));
}

$timezones = [];
foreach (timezone_identifiers_list() as $tz) {
	$timezones[] = $tz;
}

$twig = twigloader();
echo $twig->render('settings.twig', [
	'timezones' => $timezones,
	'miniyear' => $coppaYearBS,
	'birthday' => $birthday,
]);