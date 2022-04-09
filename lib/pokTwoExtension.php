<?php

namespace pokTwo;

use Parsedown;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class PokTwoExtension extends AbstractExtension
{
    public function getFunctions()
    {
        global $profiler;

        return [
            new TwigFunction('pagination', '\PokTwo\pagination', ['is_safe' => ['html']]),
            new TwigFunction('custom_info', '\PokTwo\customInfo', ['is_safe' => ['html']]),
            new TwigFunction('git_commit', '\PokTwo\gitCommit'),
            new TwigFunction('operating_system', '\PokTwo\getOS'),
            new TwigFunction('profiler_stats', function () use ($profiler) {
                $profiler->getStats();
            })
        ];
    }

    public function getFilters()
    {
        return [
            // Markdown function for non-inline text, sanitized.
            new TwigFilter('markdown', function ($text) {
                $markdown = new Parsedown();
                $markdown->setSafeMode(true);
                return $markdown->text($text);
            }, ['is_safe' => ['html']]),

            // Markdown function for inline text, sanitized.
            new TwigFilter('markdown_inline', function ($text) {
                $markdown = new Parsedown();
                $markdown->setSafeMode(true);
                return $markdown->line($text);
            }, ['is_safe' => ['html']]),

            // Markdown function for non-inline text. **NOT SANITIZED, DON'T LET IT EVER TOUCH USER INPUT**
            new TwigFilter('markdown_unsafe', function ($text) {
                $markdown = new Parsedown();
                return $markdown->text($text);
            }, ['is_safe' => ['html']]),

            new TwigFilter('relative_time', 'pokTwo\relativeTime'),
        ];
    }
}
