<?php

// Validar y sanitizar los datos del formulario
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$address = filter_var($_POST['address'], FILTER_SANITIZE_STRING);
$phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
$msg = filter_var($_POST['msg'], FILTER_SANITIZE_STRING);

if (!$email) {
    die("Email no válido.");
}

// Crear el mensaje
$output = "Name: $name\nEmail: $email\nPhone: $phone\nAddress: $address\n\nMessage: $msg";

// Configurar destinatario y encabezados
$to = 'demo@demo.com';
$headers = "From: no-reply@demo.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Enviar el correo
$send = mail($to, "Nuevo mensaje de $name", $output, $headers);

if ($send) {
    echo "Correo enviado correctamente.";
} else {
    echo "Error al enviar el correo.";
}
