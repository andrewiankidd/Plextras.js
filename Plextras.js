////////////////////////////////////////////////////
//////////////////Settings//////////////////////////
////////////////////////////////////////////////////
var delayInt = 2500;
var cssBGColor = '#3f4245';
var customHeader = "Custom Links";
var customLinks = {'Home':'javascript:switchPort(80)', 'Requests':'javascript:switchPort(3000)', 'Uptime':'https://stats.uptimerobot.com/q7BGEHzZz'};

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//yay for jquery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//custom bg
document.getElementById('content').style.backgroundColor = cssBGColor;

//wait X seconds before loading
//NOTE: this doesnt play well with user chooser (plex home)
//NOTE: would be nice to have a better trigger
window.onload = function () {	
	setTimeout(
		function() 
		{
			loadCustomSection();
		},
	delayInt);	
}


function loadCustomSection(){		
	//locate navigation sidebar
	var navdiv = $('div[role="navigation"]').parent();
	
	//copy the 'Manage' section as a template
	var newsec = $('div[role="navigation"]:first').clone();
	newsec.attr('class', 'customSection');		
		
	//edit Section Header name
	newsec.find('div[role="header"]').html(customHeader);
	
	//copy Settings link as template
	var linktemplate = newsec.find("div:eq(1)");
	console.log('linktemplate: ' + linktemplate.html());	
	
	//remove all default links
	newsec.find('a[aria-role="link"]').parent().remove();	
	
	//start appending custom links
	for (var key in customLinks) {
		newsec = newsec.clone();
		var newlink = linktemplate;	  
		newlink.find('a[aria-role="link"]').attr("href", customLinks[key]);
		newlink.find('a[aria-role="link"]').html(key);
		newlink.find('a[aria-role="link"]').attr('target', '_blank');	
		newsec.append(newlink);
	}

	//append the custom section
	navdiv.append(newsec);
	return "done";
}

function switchPort(port)
{
	var newurl = "//" + location.hostname + ":" + port;
	console.log('newurl: ' + newurl)
	window.location.href = newurl;
}