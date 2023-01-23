<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'hardingpeel@gmail.com';
  $subject = 'New message from ' . $name;

  $body = "Name: $name\n";
  $body .= "Email: $email\n\n";
  if (isset($_POST['terms'])) {
    $body .= "Subscribe to mailing list: Yes";
  } else {
    $body .= "Subscribe to mailing list: No";
  }
  $body .= "\nMessage: $message";

  if (mail($to, $subject, $body)) {
    header('Location: /joe');
  } else {
    header('Location: /joe');
  }
}
?>