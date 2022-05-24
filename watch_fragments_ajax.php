<?php
namespace pokTwo;
header('Content-type: application/json');
$rawOutputRequired = true;

require ('lib/common.php');
$twig = twigloader();

if (isset($_GET['v']))
{
    switch ($_GET['frags'])
    {
        case "comments":
            $type = 1;
        break;
		default:
			$type = 0;
		break;
    }
}
if ($type == 1)
{
?>
{"js":"","html":{"watch-discussion":"<?php echo preg_quote($twig->render('components/comments.twig')); ?>","watch7-sidebar-discussion":""}}
<?php
}
?>