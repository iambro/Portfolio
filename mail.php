<?php

$to = 'michal.ambro@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$subjest = 'Answer for portfolio from ' . $name . ' (' . $email . ') ';
$message = $_POST['message'];
$headers = 'From: ' . $name . ' (' . $email . ') ';
$headers .= "Content-Type: text/html; charset=utf-8\r\n";

mail($to, $subject, $message, $headers);

if ($send) {
    echo '<br>';
    echo 'Thanks for contacting me. I will be with you shortly.';
} else {
    echo 'ERROR'
}

?>