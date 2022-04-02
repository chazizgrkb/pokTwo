<?php
namespace pokTwo;
class PokTwoExtension extends \Twig\Extension\AbstractExtension {
	public function getFunctions() {
		global $profiler;

		return [
			new \Twig\TwigFunction('pagination', '\PokTwo\pagination', ['is_safe' => ['html']]),
			new \Twig\TwigFunction('custom_info', '\PokTwo\customInfo', ['is_safe' => ['html']]),
			new \Twig\TwigFunction('git_commit', '\PokTwo\gitCommit'),
			new \Twig\TwigFunction('profiler_stats', function () use ($profiler) {
				$profiler->getStats();
			})
		];
	}
	public function getFilters() {
		return [
			// Markdown function for non-inline text, sanitized.
			new \Twig\TwigFilter('markdown', function ($text) {
				$markdown = new \Parsedown();
				$markdown->setSafeMode(true);
				return $markdown->text($text);
			}, ['is_safe' => ['html']]),

			// Markdown function for inline text, sanitized.
			new \Twig\TwigFilter('markdown_inline', function ($text) {
				$markdown = new \Parsedown();
				$markdown->setSafeMode(true);
				return $markdown->line($text);
			}, ['is_safe' => ['html']]),

			// Markdown function for non-inline text. **NOT SANITIZED, DON'T LET IT EVER TOUCH USER INPUT**
			new \Twig\TwigFilter('markdown_unsafe', function ($text) {
				$markdown = new \Parsedown();
				return $markdown->text($text);
			}, ['is_safe' => ['html']]),

			new \Twig\TwigFilter('relative_time', 'pokTwo\relativeTime'),
		];
	}
}
