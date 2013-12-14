
$(window).scroll(function () { 
	if (($(window).scrollTop() + $(window).height()) > ($(document).height() - 25)) document.getElementById("feedbackSuggest").style.height = '30px'; 
	else document.getElementById("feedbackSuggest").style.height = '0px';
}); 

function openFeedback(){
	document.getElementById("feedbackScreen").style.display = "block";
	document.getElementById("feedbackBg").style.height = "500px";
}

function closeFeedback(){
	document.getElementById("feedbackScreen").style.display = "none";
}

function sendMessage(){
	var email = document.getElementsByName("email")[0].value;
	var subject = document.getElementsByName("subject")[0].value;
	var message = document.getElementsByName("message")[0].value;
	if (message=="" || message==null){
		alert("You message is looking a little empty there. Why don't you fill it before sending?");
	}
	else if (email=="" || email==null){
		alert("Don't forget to send us your email! We don't bite, but you are welcome to use a fake email.");
	}
	else if (subject=="" || subject==null){
		alert("Please fill in the subject line with something catchy, so we'll see your message");
	}
	else {
		document.messageus.action = "feedback.php";
		document.messageus.submit();
	}
}
