<?php

function cmtTypeToNum($type) {
	return match ($type) {
		'post'	=> 1,
		'news'	=> 2,
		'user'	=> 3,
	};
}

function cmtNumToType($num) {
	return match ($num) {
		1 => 'post',
		2 => 'news',
		3 => 'user'
	};
}
