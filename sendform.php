<?php

$die_msg = "Vi kunde inte skicka din e-mail. Var vänlig försök igen!";

// Mail to Marcus
/*
 *	Form values
 */
$name = $_POST["name"];
$email = $_POST["email"];
$school_class = $_POST["school_class"];
$drink = $_POST["drink"];
$allergies = ($_POST["allergies"] != '' ? $_POST["allergies"] : 'Nope');
$other = ($_POST["other"] != '' ? $_POST["other"] : 'Nope');

/*
 *	Static values
 */
$to = "c30k@c.lintek.liu.se";
// $to = 'jwanglof@gmail.com';
$headers = "From: " . $email . "\r\n";
//$headers .= "Content-type: text/html; charset=UTF-8\r\n";
/*$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();*/

$subject = "C30 Sittningspaket";
$message = "Namn: " . $name ."\r\nSkolklass: " . $school_class . "\r\nDryck: " . $drink . "\r\nAllergier: " . $allergies . "\r\nAnnat: " . $other;

mail($to, $subject, $message, $headers) or die("1, " . $die_msg);
// !Mail to Marcus

// Mail to the user
$user_message = "Hej " . $name . "!\r\n\r\nDu har anmält dig till C30s sittningspaket. Det enda du behöver göra nu är att skicka in 150SEK till C-sektionens plusgiro nr 36 02 90-1, märk denna betalning med din e-mail som du angav!\r\nNär vi har fått din betalning kommer du få ett bekräftelsemail över detta.\r\n\r\nSes den 4e Maj!\r\nMVH C30";
$user_headers = "From: " . $to . "\r\n";
mail($email, $subject, $user_message, $user_headers) or die("2, " . $die_msg);
// !Mail to the user

header("Location: index.html") or die("Header doed");

?>