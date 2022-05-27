<?php
namespace pokTwo;
require('lib/common.php');
header("Content-type: text/xml");

if (isset($_GET['action_create_subscription_to_channel'])) {

$token = Users::getUserIDFromToken($_POST['plid']);

echo '<root>
  <str_code>subscription-subscribe-success</str_code>
  <html_content>SEX</html_content>
</root>';
}
?>
