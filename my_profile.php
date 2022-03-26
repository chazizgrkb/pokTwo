<?php
require('lib/common.php');

if (!$log) redirect('login.php');

$coppaYearBS = date('Y') - 13;

$birthday = explode('-', $userdata['birthday']);

if (isset($_POST['magic'])) {
	$title			= $_POST['title'] ? $_POST['title'] : null;
	$about			= $_POST['about'] ? $_POST['about'] : null;
	$location		= $_POST['location'] ? $_POST['location'] : null;
	$signature		= $_POST['signature'] ? $_POST['signature'] : null;
	$timezone		= $_POST['timezone'] != 'Europe/Stockholm' ? $_POST['timezone'] : null;
	$year			= $_POST['year'] ? $_POST['year'] : null;
	$month			= $_POST['month'] ? $_POST['month'] : null;
	$day			= $_POST['day'] ? $_POST['day'] : null;
	
	$dob = $year . "-" . $month . "-" . $day;
	
	if ($year > $coppaYearBS) {
		die("Nice try, child.");
	}

	query("UPDATE users SET title = ?, customcolor = ?, about = ?, location = ?, timezone = ?, signature = ?, birthday = ? WHERE id = ?",
		[$title, $customcolor, $about, $location, $timezone, $signature, $dob, $userdata['id']]);

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