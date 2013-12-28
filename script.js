//runs on window scroll. For moving things about the page
$(window).scroll(function () { 
	if (($(window).scrollTop() + $(window).height()) > ($(document).height() - 25)) document.getElementById('feedbackSuggest').style.height = '30px'; 
	else document.getElementById('feedbackSuggest').style.height = '0px';
}); 

//opens section at the bottom of the page, triggered by tab at the bottom of the page
function openClose(current, other){
	//if the tab is already opened
	if (document.getElementById('bottomTab').style.height == '250px'){ //this number will not work on smaller screens
		//either the element's visibilities must be switched
		if (document.getElementById(other).style.display != 'none'){
			document.getElementById(other).style.display = 'none';
			document.getElementById(current).style.display = 'block';
		}
		//or the user wants to close the tab
		else {
			document.getElementById(current).style.display = 'none';
			document.getElementById('bottomTab').style.height = '0px';
		}
	}
	//otherwise, the user is opening the tab for the first time
	else {
		document.getElementById('bottomTab').style.height = '250px'; //it will also look odd on larger screens. We need a way to calculate this dynamically
		document.getElementById(current).style.display = 'block';
	}
}

//opens feedback form, triggered by popup at bottom
function openFeedback(){
	document.getElementById('feedbackBg').style.margin = ($(window).height() / 2) + 'px ' + ($(window).width() / 2) + 'px';
	document.getElementById('feedbackScreen').style.display = 'block';
	setTimeout(function(){
		document.getElementById('feedbackBg').style.height = '500px';
		document.getElementById('feedbackBg').style.width = '500px';
		document.getElementById('feedbackBg').style.margin = ((height - 500) / 2) + 'px ' + ((width - 500) / 2) + 'px';
	}, 100);
}

//closes feedback form, triggered by 'x' button
function closeFeedback(){
	document.getElementById('feedbackScreen').style.display = 'none';
	document.getElementById('feedbackBg').style.height = '0px';
	document.getElementById('feedbackBg').style.width = '0px';
	document.getElementById('feedbackBg').style.margin = (height / 2) + 'px ' + (width / 2) + 'px';
}

//validates the form and notifies user of error before sending feedback
function sendMessage(){
	var name = document.getElementsByName('name')[0].value;
	var subject = document.getElementsByName('subject')[0].value;
	var message = document.getElementsByName('message')[0].value;
	if (message=='' || message==null){
		alert('You message is looking a little empty there. Why don\'t you fill it before sending?');
	}
	else if (name=='' || name==null){
		alert('Don\'t forget to tell us your name! Otherwise we\'ll be forced to call you "Bushel Britches" behind your back.');
	}
	else if (subject=='' || subject==null){
		alert('Please fill in the subject line with something catchy, so we\'ll see your message.');
	}
	else {
		document.giveFeedback.action = 'feedback.php';
		document.giveFeedback.submit();
	}
}
