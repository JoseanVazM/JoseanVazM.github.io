<?php

$to 		= 'demo@demo.com';
$headers	= 'FROM: "'.$email.'"';

//All form values
$name 		= 	$_POST['name'];
$email 		= 	$_POST['email'];
$address 	= 	$_POST['address'];
$phone 		= 	$_POST['phone'];
$msg 		= 	$_POST['msg'];
$output 	= 	"Name: ".$name.
				"\nEmail: ".$email.
				"\nPhone: ".$phone.
				"\nAddress: ".$address.
				"\n\nMessage: ".$msg;

$send		= mail($to, $name, $output, $headers);
