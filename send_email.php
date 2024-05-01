<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up email parameters
    $to = 'avinashchintada1@gmail.com'; // Your email address
    $subject = 'New message from your website';
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo '<script>alert("Message sent successfully!");</script>';
    } else {
        echo '<script>alert("Failed to send message. Please try again later.");</script>';
    }
}
?>
