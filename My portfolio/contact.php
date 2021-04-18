<?php

// echo '<pre>';
// print_r($_POST);
// echo '<pre>';

if (isset($_POST['email']) && $_POST['email'] != '' ) {

    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) 

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'heidi.maattanen@edu.bc.fi';
    $subject = 'User ' . $_POST['name'] . ' with email ' . $_POST['email'] . ' has sent a message.';
    $body = "";

    $body .= "From: " .$name. "\r\n";
    $body .= "Email: " .$email. "\r\n";
    $body .= "Message: " .$message. "\r\n";

    $success = mail($to, $subject, $body);

    if (!$success) {
        echo 'Error, message was not sent.';
    } else {
        echo 'Email was successfully sent.';
    }
}

?>
