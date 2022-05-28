<?php
namespace pokTwo\oldMeta;

function _twigloader($subfolder = '') {
	global $dateformat, $frontend, $pageName;
	chdir('../');
	$twig = \pokTwo\twigloader($subfolder, function () use ($subfolder, $frontend) {
		return new \Twig\Loader\FilesystemLoader('templates/' . $frontend . $subfolder);
	}, function ($loader, $doCache) {

		return new \Twig\Environment($loader, [
			'cache' => ($doCache ? "../".$doCache : $doCache),
		]);
	});
	
	$twig->addExtension(new ptOldMetaExtension());

	$twig->addGlobal('pageName', $pageName);

	return $twig;
}