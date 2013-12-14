<?php
	$email = $_REQUEST['email'];
	$subject = $_REQUEST['subject'];
	$message = $_REQUEST['message'];

	if (!isset($_REQUEST['email'])) {
		header( "Location: http://www.indianapolisindiana.zxq.net/feedback.html");
	}
	elseif (empty($email) || empty($message)) {
		header( "Location: http://www.indianapolisindiana.zxq.net/error.html");
	}
	elseif ( preg_match( "/[\r\n]/", $name) || preg_match( "/[\r\n]/", $email) ){
		header( "Location: http://www.indianapolisindiana.zxq.net/error.html");
	}
	else {
		mail( "annelies.odermann@gmail.com", "Indy Feedback: $subject", $message, "From: $email" );
		header( "Location: http://www.indianapolisindiana.zxq.net/thankyou.html");
	}

?>