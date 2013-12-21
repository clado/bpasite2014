
//to be run when the screen is loaded
//Ensures that the feedback box appears in the middle of the page
function screenLoad(){
	height = $(window).height();
	width = $(window).width();
	//needs fixing
	document.getElementById('feedbackBg').style.margin = (height / 2) + 'px ' + (width / 2) + 'px';
}


//runs on window scroll. For moving things about the page
$(window).scroll(function () { 
	if (($(window).scrollTop() + height) > ($(document).height() - 25)) document.getElementById('feedbackSuggest').style.height = '30px'; 
	else document.getElementById('feedbackSuggest').style.height = '0px';
}); 

//opens section at the bottom of the page, triggered by tab at the bottom of the page
function openClose(current, other){
	//if the selected element is already opened, it should be closed
	if (document.getElementById(current).style.height != '0px') {
		close(current);
	}
	//if another element is already open, this element must wait while it is closed
	else if (document.getElementById(other).style.height != '0px') {
		document.getElementById(other).style.height = '0px';
		setTimeout(autoHeight(current), 20000); //change time to match transition time
	}
	else {
		autoHeight(current);
	}
}

//sets the element's height to zero
function close(element){
	document.getElementById(element).style.height = '0px';
}

//sets the element's height to auto
function autoHeight(element){
	document.getElementById(element).style.height = '300px';
}

//opens feedback form, triggered by popup at bottom
function openFeedback(){
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
