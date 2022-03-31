<?php
namespace pokTwo;
require('lib/common.php');

$videoData = query("SELECT $userfields $videofields FROM videos v JOIN users u ON v.author = u.id ORDER BY v.time DESC LIMIT 5");

 header( "Content-type: text/xml");
 
 echo "<?xml version='1.0' encoding='UTF-8'?>
 <rss version='2.0' xmlns:media='http://search.yahoo.com/mrss'>
 <channel>
 <title>PokTwo :: Recently Added Videos</title>
 <link>$domain/rss/global/recently_added.rss</link>
 <description>Recently Added Videos</description>";
 
 while($row = $videoData->fetch()){
   $title=$row["title"];
   $id=$row["video_id"];
   $description=$row["description"];
   $username=$row["u_name"];
   $date=date(DATE_RFC2822, $row["time"]);
 
   echo "<item>
    <author>rss@poktwo.com ($username)</author>
    <title>$title</title>
    <link>$domain/?v=$id</link>
    <description>
        <![CDATA[
		<img src='$domain/get_still.php?video_id=$id' align='right' border='0' width='120' height='90' vspace='4' hspace='4' /><p>
		$description</p>
		<p>Author: <a href='$domain/profile.php?user=$username'>allenh$username</a><br/>
		Keywords: <a href='http://www.youtube.com/results.php?search=kitty'>kitty</a><a href='http://www.youtube.com/results.php?search=action'>action</a><a href='http://www.youtube.com/results.php?search=race'>race</a><br/>                     Added: August 19, 2005<br/></p> ]]>
    </description>
    <guid isPermaLink='true'>$domain/?v=$id</guid>
    <pubDate>$date</pubDate>
    <media:player url='$domain/?v=o$id' />
    <media:thumbnail url='$domain/get_still.php?video_id=$id' width='120' height='90' />
    <media:title>$title</media:title>
    <media:category label='Tags'>kitty action race</media:category>
    <media:credit>$username</media:credit>
    <enclosure url='$domain/v/$id.swf' length='177' type='application/x-shockwave-flash' />
</item>";
 }
 echo "</channel></rss>";
?>