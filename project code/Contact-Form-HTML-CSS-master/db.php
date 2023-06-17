<?php


DEFINE('DATABASE_USER', 'root');
DEFINE('DATABASE_PASSWORD', '');
DEFINE('DATABASE_HOST', 'localhost');
DEFINE('DATABASE_NAME', 'healthCompanion');


// date_default_timezone_set("Asia/Kolkata");

// define('EMAIL', 'mukundkumar1811@gmail.com');

// DEFINE('WEBSITE_URL', 'http://www.healthcompanion.com');

$dbc = @mysqli_connect(DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD,
    DATABASE_NAME);

if (!$dbc) {
    trigger_error('Could not connect to MySQL: ' . mysqli_connect_error());
}


?>



