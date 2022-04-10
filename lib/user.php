<?php

namespace pokTwo;

use DateTime;

class Users
{
    /**
     * Get list of SQL SELECT fields for userlinks.
     *
     * @return string String to put inside a SQL statement.
     */
    static function userfields(): string
    {
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
    static function getAge($birthday): int
    {
        $date = new DateTime($birthday); // YYYY-MM-DD
        $now = new DateTime();
        $interval = $now->diff($date);
        $age = $interval->y;
        return $age;
    }

    /**
     * Get the amount of videos a user has uploaded. Probably index this shit in the future.
     *
     * @return int
     */
    static function getUserVideoCount($userID): int
    {
        global $sql;
        $count = $sql->result("SELECT COUNT(id) FROM videos WHERE author=?", [$userID]);
        return $count;
    }

    /**
     * Get the amount of videos a user has favorited. Probably index this shit in the future.
     *
     * @return int
     */
    static function getUserFavoriteCount($userID): int
    {
        global $sql;
        $count = $sql->result("SELECT COUNT(user_id) FROM favorites WHERE user_id=?", [$userID]);
        return $count;
    }

    /**
     * Convert type of relationship to integer.
     *
     * @return int
     */
    static function type_to_relationship($type): int
    {
        switch ($type) {
            case 'none':
                $relationship = 0;
                break;
            case 'single':
                $relationship = 1;
                break;
            case 'taken':
                $relationship = 2;
                break;
            case 'married':
                $relationship = 3;
                break;
        }
        return $relationship;
    }

    /**
     * Convert interger to type of relationship.
     *
     * @return string
     */
    static function relationship_to_type($relationship): string
    {
        switch ($relationship) {
            case 0:
                $type = 'none';
                break;
            case 1:
                $type = 'single';
                break;
            case 2:
                $type = 'taken';
                break;
            case 3:
                $type = 'married';
                break;
        }
        return $type;
    }

    /**
     * Convert type of gender to interger.
     *
     * @return int
     */
    static function type_to_gender($type): int
    {
        switch ($type) {
            case 'private':
                $gender = 0;
                break;
            case 'unknown':
                $gender = 1;
                break;
            case 'male':
                $gender = 2;
                break;
            case 'female':
                $gender = 3;
                break;
        }
        return $gender;
    }

    /**
     * Convert interger to type of gender.
     *
     * @return string
     */
    static function gender_to_type($gender): string
    {
        switch ($gender) {
            case 0:
                $type = 'private';
                break;
            case 1:
                $type = 'unknown';
                break;
            case 2:
                $type = 'male';
                break;
            case 3:
                $type = 'female';
                break;
        }
        return $type;
    }

    static function register($name, $pass, $mail): string
    {
        global $sql;
        $token = bin2hex(random_bytes(20));
        $sql->query("INSERT INTO users (name, password, email, token, joined, lastview, ip) VALUES (?,?,?,?,?,?,?)",
            [$name, password_hash($pass, PASSWORD_DEFAULT), $mail, $token, time(), time(), $_SERVER['REMOTE_ADDR']]);

        return $token;
    }
}