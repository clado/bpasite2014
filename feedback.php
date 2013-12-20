<?php
	$name = $_REQUEST['name'];
	$subject = $_REQUEST['subject'];
	$message = $_REQUEST['message'];

	//if this script was triggered accidentally, do not sent
	if (!isset($_REQUEST['name'])) {
		header( "Location: http://www.greenenergy.net84.net/index.html");
		print '<script type="text/javascript">'; 
		print 'alert("Your feedback could not be sent. Sorry.")'; 
		print '</script>';  
	}
	//if the name or message is empty, do not sent
	elseif (empty($name) || empty($message)) {
		header( "Location: http://www.greenenergy.net84.net/index.html");
		print '<script type="text/javascript">'; 
		print 'alert("Your feedback could not be sent. Sorry.")'; 
		print '</script>';  
	}
	//if some creeper is attempting to use our hoster to mass email people, do not sent
	elseif ( preg_match( "/[\r\n]/", $name) || preg_match( "/[\r\n]/", $name) ){
		header( "Location: http://www.greenenergy.net84.net/index.html");
		print '<script type="text/javascript">'; 
		print 'alert("Emails are to be sent only to us, but nice try.")'; 
		print '</script>';  
	}
	//mail if everything is up to snuff
	else {
		mail( "annelies.odermann@gmail.com", "Green Feedback: $subject", $message, "From: $name" );
		header( "Location: http://www.greenenergy.net84.net/index.html");
		print '<script type="text/javascript">'; 
		print 'alert("Thank you for your feedback!")'; 
		print '</script>';  
	}

?>