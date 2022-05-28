<?php
namespace pokTwo\API\v1;
chdir('../../');
$rawOutputRequired = true;
require('lib/common.php');

header('Content-Type: application/json');

$id = (isset($_GET['id']) ? $_GET['id'] : null);

$videoData = \pokTwo\Videos::getVideoData($userfields, $id);
$videoData['tags'] = \pokTwo\VideoTags::getVideoTags($videoData['id']);

if (!$videoData) {
	$apiOutput = [ 'error' => "No video specified or invalid video ID", 'code' => "52e44101" ];

	echo json_encode($apiOutput);
	die();
}

// TODO: comments? likes?
$apiOutput = [
	'id'	=> $videoData['video_id'],
	'title'	=> $videoData['title'],
	'description' => $videoData['description'],
	'time' => $videoData['time'],
	'views' => $videoData['views'],
	'videofile' => $videoData['videofile'],
	'videolength' => $videoData['videolength'],
	'flags' => [ // supposed to be a "videoflags" object
		'processing' => $videoData['flags'] & 0x2,
		'featured' => $videoData['flags'] & 0x2,
	],
	'tags' => $videoData['tags'],
	'author' => [ // supposed to be an "user" object
		'username' => $videoData['u_name']
	]
];

echo json_encode($apiOutput);
