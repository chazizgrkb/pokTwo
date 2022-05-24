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
$commentData = VideoComments::getComments($_GET['v']);
$commentCount = $sql->fetch("SELECT COUNT(id) FROM comments WHERE id=?", [$_GET['v']]) ['COUNT(id)'];
$output = $twig->render('components/comments.twig', [ 'comments' => $commentData, 'commentCount' => $commentCount, 'videoid' => $_GET['v'],]);
$output = json_encode($output);
?>
{"js":"","html":{"watch-discussion":<?php echo $output; ?>,"watch7-sidebar-discussion":""}}
<?php
}
?>