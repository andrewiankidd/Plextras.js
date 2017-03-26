////////////////////////////////////////////////////
//////////////////Settings//////////////////////////
////////////////////////////////////////////////////
var delayInt = 2500;
var cssBGColor = '#3f4245';
var autohideSidebar = true;
var showArtWorkBackground = true;
var ShowExpandedExtras = true;
var customHeader = "Custom Links";
var customLinks = {'Home':'javascript:switchPort(80)', 'Requests':'javascript:switchPort(3000)', 'Uptime':'https://stats.uptimerobot.com/q7BGEHzZz'};
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

var ua = navigator.userAgent;

if (ua.includes('PlexMediaPlayer')){
	alert('Loading Plextras for PMP...!');
}

//yay for jquery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//custom bg
document.getElementById('content').style.backgroundColor = cssBGColor;

//wait X seconds before loading
//NOTE: this doesnt play well with user chooser (plex home)
//NOTE: would be nice to have a better trigger
window.onload = function () {	
	//start
	loadMods();
}

window.onhashchange = function () {	
	//wait a bit to load custom section
	loadMods();
}

function loadMods(){
console.log('[Plextras.js] Starting Plextras...');
	loadCustomStyles();

	//wait a bit to load custom section
	setTimeout(
		function() 
		{					
			loadCustomSection();
			loadSidebarSettings();
			loadExtrasSettings();
		},
	delayInt);	
}

function loadCustomStyles(){
	
	if (showArtWorkBackground==true)
	{
		//all credit to https://github.com/uzegonemad/plexbgartwork
		console.log('[Plextras.js] Adding artwork mod');
		$.get( "https://raw.githubusercontent.com/uzegonemad/plexbgartwork/master/plexbgartwork.css", function( data ) {
		  $('head').append('<style type="text/css">'+ data +'</style>');
		});
	}
}

function loadExtrasSettings(){
		
	if (ShowExpandedExtras==true)
	{		
		console.log('[Plextras.js] expanding extras section');
		//[class^="classname"]
		var extrasCSS = '[class^="PrePlayExtrasList-extrasHubCell-"]>div:nth-child(2),[class^="PrePlayExtrasList-extrasHubCell-"]>div:nth-child(2)>[class^="Measure-container-"]>div>div{ height:auto!important; width: auto!important; }';
		extrasCSS += '[class^="PrePlayExtrasList-extrasHubCell-"]>div:nth-child(2)>[class^="Measure-container-"]>div>div>div{ position:relative!important; display:inline-block; transform: translate3d(10px, 10px, 0px)!important; margin: 10px;}';
		$('head').append('<style type="text/css">'+ extrasCSS +'</style>');
	}
}

function loadSidebarSettings(){
	
	//hide sidebar
	if (autohideSidebar==true){
		
		//kill container margin and add transition speed
		$(".page-container").css("margin-left", "0px");	
		$('.sidebar-container').css("transition", "0.25s");
		
		//add hover actions
		$('.sidebar-container').hover(function(){
			expandSidebar();
		}, function(){
			contractSidebar();
		});	
		
		//contract sidebar
		contractSidebar();
	}	
	
	function expandSidebar(){
		console.log('[Plextras.js] Expanding sidebar');
		$('.sidebar-container').css("width", "240px");
		//this has a short delay so it waits for transition animation to finish before restoring text
		setTimeout(
			function() 
			{					
				$('[class^="SidebarLink-title"]').removeAttr( 'style' );
				$('[class^="SidebarServerLibraries-librariesTitle"]').removeAttr( 'style' );
				$('[class^="SidebarList-sidebarListHeader"]').removeAttr( 'style' );
				$('[class^="SidebarLibrariesActions-actions"]').removeAttr( 'style' );
				$('[class^="SidebarLink-children"]').removeAttr( 'style' );
				$('[class^="ServerMenuButton-serverMenuTitle"]').removeAttr( 'style' );
				$('[class^="SidebarLibraryItem-action"]').removeAttr( 'style' );
			},
		300);			
	}
	
	function contractSidebar(){
		console.log('[Plextras.js] Contracting sidebar');
		$('[class^="SidebarLink-title"]').css("font-size", "0px");
		$('[class^="SidebarServerLibraries-librariesTitle"]').css("font-size", "0px");
		$('[class^="SidebarList-sidebarListHeader"]').css("font-size", "0px");
		$('[class^="SidebarLibrariesActions-actions"]').css("display", "none");
		$('[class^="SidebarLink-children"]').css("display", "none");
		$('[class^="ServerMenuButton-serverMenuTitle"]').css("display", "none");
		$('[class^="SidebarLibraryItem-action"]').css("width", "0px");
		$('.sidebar-container').css("width", "65px");
	}
}


function loadCustomSection(){	
	console.log('[Plextras.js] Adding custom links section');
	
	//locate navigation sidebar
	var navdiv = $('div[role="navigation"]').parent();
	
	//copy the 'Manage' section as a template
	var newsec = $('div[role="navigation"]:first').clone();
	newsec.attr('class', 'customSection');		
		
	//edit Section Header name
	newsec.find('div[role="header"]').html(customHeader);
	
	//copy Settings link as template
	var linktemplate = newsec.find("div:eq(1)");
	
	//remove all default links
	newsec.find('[class^="SidebarListItem-sidebarListItem"]').remove();	
	
	//start appending custom links
	for (var key in customLinks) {
		newsec = newsec.clone();
		var newlink = linktemplate;	  
		newlink.find('a').attr("href", customLinks[key]);
		newlink.find('[class^="SidebarLink-title"]').html(key);
		newlink.find('a').attr('target', '_blank');	
		newsec.append(newlink);
	}

	//append the custom section
	navdiv.append(newsec);
	return "done";
}

function switchPort(port)
{
	var newurl = "//" + location.hostname + ":" + port;
	console.log('newurl: ' + newurl);
	window.location.href = newurl;
}
