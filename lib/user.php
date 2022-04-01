<?php
namespace pokTwo;
class Users
{
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
	static function userfields() {
		$fields = ['id', 'name'];

		$out = '';
		foreach ($fields as $field) {
			$out .= sprintf('u.%s u_%s,', $field, $field);
		}

		return $out;
	}

	/**
	 * Get the user's age.
	 *
	 * @return int
	 */
	function getAge($birthday) {
		$date = new \DateTime($birthday); // YYYY-MM-DD
		$now = new \DateTime();
		$interval = $now->diff($date);
		$age = $interval->y;
		return $age;
	}

	/**
	 * Get the amount of videos a user has uploaded. Probably index this shit in the future.
	 *
	 * @return int
	 */
	function getUserVideoCount($userID) {
		global $mysql;
		$count = $mysql->result("SELECT COUNT(id) FROM videos WHERE author=?", [$userID]);
		return $count;
	}

	/**
	 * Get the amount of videos a user has favorited. Probably index this shit in the future.
	 *
	 * @return int
	 */
	function getUserFavoriteCount($userID) {
		global $mysql;
		$count = $mysql->result("SELECT COUNT(user_id) FROM favorites WHERE user_id=?", [$userID]);
		return $count;
	}

	/**
	 * Convert type of relationship to interger.
	 *
	 * @return int
	 */
	function type_to_relationship($type) {
		switch ($type) {
			case 'none':	return 0;
			case 'single':	return 1;
			case 'taken':	return 2;
			case 'married':	return 3;
		}
	}

	/**
	 * Convert interger to type of relationship.
	 *
	 * @return string
	 */
	function relationship_to_type($relationship) {
		switch ($relationship) {
			case 0:	return 'none';
			case 1:	return 'single';
			case 2:	return 'taken';
			case 3:	return 'married';
		}
	}

	/**
	 * Convert type of gender to interger.
	 *
	 * @return int
	 */
	function type_to_gender($type) {
		switch ($type) {
			case 'private':	return 0;
			case 'unknown':	return 1;
			case 'male':	return 2;
			case 'female':	return 3;
		}
	}

	/**
	 * Convert interger to type of gender.
	 *
	 * @return string
	 */
	function gender_to_type($gender) {
		switch ($gender) {
			case 0:	return 'private';
			case 1:	return 'unknown';
			case 2:	return 'male';
			case 3:	return 'female';
		}
	}
}