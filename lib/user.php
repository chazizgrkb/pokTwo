<?php
namespace pokTwo;

/**
 * Return HTML code for an userlink.
 *
 * @param array $user User array containing user fields. Retrieve this from the database using userfields().
 * @param string $pre $user key prefix.
 * @return string Userlink HTML code.
 */
function userlink($user, $pre = '') {
	return <<<HTML
		<a class="user" href="/profile.php?user={$user[$pre.'name']}"><span class="t_user">{$user[$pre.'name']}</span></a>
HTML;
}

/**
 * Get list of SQL SELECT fields for userlinks.
 *
 * @return string String to put inside a SQL statement.
 */
function userfields() {
	$fields = ['id', 'name'];

	$out = '';
	foreach ($fields as $field) {
		$out .= sprintf('u.%s u_%s,', $field, $field);
	}

	return $out;
}

/**
 * Convert type of relationship to interger.
 *
 * @return int
 */
function type_to_relationship($type) {
	return match ($type) {
		'none'		=> 0,
		'single'	=> 1,
		'taken'		=> 2,
		'married'	=> 3,
	};
}

/**
 * Convert interger to type of relationship.
 *
 * @return string
 */
function relationship_to_type($relationship) {
	return match ($relationship) {
		0 => 'none',
		1 => 'single',
		2 => 'taken',
		3 => 'married'
	};
}

/**
 * Convert type of gender to interger.
 *
 * @return int
 */
function type_to_gender($type) {
	return match ($type) {
		'private'	=> 0,
		'unknown'	=> 1,
		'male'		=> 2,
		'female'	=> 3,
	};
}

/**
 * Convert interger to type of gender.
 *
 * @return string
 */
function gender_to_type($gender) {
	return match ($gender) {
		0 => 'private',
		1 => 'unknown',
		2 => 'male',
		3 => 'female',
	};
}