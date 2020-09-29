<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $toEmail = "kevinwang9000@gmail.com";
    $email_subject = "PortFolio Request!!!";

    $headers = "From: $toEmail\r\n";
    $headers .= "Replay to: $email\r\n";

    mail($toEmail, $email_subject, $message, $headers);

    header("Location: index.html");
?>