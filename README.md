# pokTwo

Another sequel to PokTube. We plan on being accurate to the original YouTube website from near the end of 2013, by using HTML dumps accidentally uploaded to GitHub and archives from the Internet Archive.

This is based on the internals of squareBracket, with a few bits of code originating from SuxCox.

## How to setup pokTwo.
1. Get a web server (Apache/NGINX) with PHP and MariaDB up and running, including Composer.
1. Run `composer update` from the terminal.
1. Copy `config.sample.php`, rename it to `config.php` and fill in your database credentials.
1. Import the database dump found in `sql/` into the database you want to use.

### Production specific
1. Instead of installing dependencies using `composer update` you do `composer update --no-dev`
1. Make the `media/`, `templates/cache/`, `thumb/` and `pfps/` directories writable by your web server.

### Development specific
1. Disable Twig's template caching by setting `$tplNoCache` to true.
1. Enable debugging features by setting `$isDebug` to true.
1. If you want to be able to upload videos during development, make the `media/` and `thumb/` directory writable by your web server.
