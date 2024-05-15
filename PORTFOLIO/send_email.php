<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set up email parameters
    $to = "monksop@tuta.io";
    $subject = "New message from your website";
    $body = "Name: $name\nEmail: $email\n\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
} else {
    // If not a POST request, redirect back to the contact page
    header("Location: contact.html");
}
?>
