<?php
    echo '<pre>';
    print_r($_POST);
    echo'<pre>';

    if(isset($POST['email']) && $_POST['email'] != '') {

        if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) )

        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $to="heidi.maattanen@gmail.com";
        $body = "";

        $body .= "From: " .$name. "\r\n";
        $body .= "Email: " .$email. "\r\n";
        $body .= "Message: " .$message. "\r\n";

        $sent_status=mail($to, $body);

        if ($sent_status) {
            echo 'Message was delivered';
        } else {
            echo 'Email was not sent, check your email address.';
        }
    }

    /* $to="heidi.maattanen@gmail.com";

    $sent_status = mail($to, $_POST['email'], 'Sent from my portfolio page', $_POST['name'], $_POST['message']);

    if ($sent_status) {
        echo 'Message was delivered';
    } else {
        echo 'Email was not sent, check your email address.';
    } */
?>
