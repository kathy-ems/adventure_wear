<html>
// 4/27/2015
// Authored by Kathy Ems<head>
<head>
</head>
<body> <?phpdate_default_timezone_set('America/Los_Angeles');// ~~~~~~~~~~Make a MySQL Connection~~~~~~~
$con = mysql_connect('HOSTNAME','phoebe','bubbles2015');
mysql_select_db('testMySQL', $con);
?>


mysql_free_result($result); //clears $results for saving memorymysql_close($con); // Close DB connection
</body>
</html>