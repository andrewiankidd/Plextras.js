////////////////////////////////////////////////////
//////////////////Settings//////////////////////////
////////////////////////////////////////////////////
var delayInt = 2500;
var cssBGColor = '#3f4245';
var autohideSidebar = true;
var showArtWorkBackground = true;
var ShowExpandedExtras = true;
var hideMovieExtras = true; //NOTE!!!: ShowExpandedExtras takes priority
var hideCastList = true;
var hideRelatedMedia = true;
var customHeader = "Custom Links";
var customLinks = {'Home':'javascript:switchPort(80)', 'Requests':'javascript:switchPort(3000)', 'Uptime':'javascript:internalLink("https://stats.uptimerobot.com/q7BGEHzZz")', 'GitHub':'https://github.com/andrewiankidd/Plextras.js'};
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
			loadSidebarSettings();
			loadExtraSettings();
			loadCustomSection();
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

function loadExtraSettings(){

	if (ShowExpandedExtras==true)
	{
		console.log('[Plextras.js] expanding extras section');
		var expandExtrasCSS = '[class^="PrePlayExtrasList-extrasHubCell-"]>div:nth-child(2),[class^="PrePlayExtrasList-extrasHubCell-"]>div:nth-child(2)>[class^="Measure-container-"]>div>div{ height:auto!important; width: auto!important; }';
		expandExtrasCSS += '[class^="PrePlayExtrasList-extrasHubCell-"]>div:nth-child(2)>[class^="Measure-container-"]>div>div>div{ position:relative!important; display:inline-block; transform: translate3d(10px, 10px, 0px)!important; margin: 10px;}';
		$('head').append('<style type="text/css">'+ expandExtrasCSS +'</style>');
	}
	else if (hideMovieExtras==true)
	{
		console.log('[Plextras.js] Hiding movie extras');
		var hideExtrasCSS = '[class^=PrePlayExtrasList-extrasHubCell-]{display:none!important}';
		$('head').append('<style type="text/css">'+ hideExtrasCSS +'</style>');
	}

	if (hideCastList==true)
	{
		console.log('[Plextras.js] Hiding cast list');
		var hideCastListCSS = '[class^=PrePlayCastList-castList-]{display:none!important}';
		$('head').append('<style type="text/css">'+ hideCastListCSS +'</style>');
	}

	if (hideRelatedMedia==true)
	{
		console.log('[Plextras.js] Hiding related media');
		var HideRelatedMediaCSS = '[class^=PrePlayRelatedList-relatedList-]{display:none!important}';
		$('head').append('<style type="text/css">'+ HideRelatedMediaCSS +'</style>');
	}
}

function loadSidebarSettings(){

	//hide sidebar
	if (autohideSidebar==true){

		//kill container margin and add transition speed
		$(".page-container").css("margin-left", "0px");
		$('.sidebar-container').css("transition", "0.25s");
		
		//inject CSS
		console.log('[Plextras.js] Hiding sidebar');
		var hideSidebarCSS = '.sidebar-container [class^="SidebarLink-title"], .sidebar-container [class^="SidebarServerLibraries-librariesTitle"], .sidebar-container [class^="SidebarList-sidebarListHeader"]{font-size: 0px;}.sidebar-container [class^="SidebarLibrariesActions-actions"], .sidebar-container [class^="SidebarLink-children"], .sidebar-container [class^="ServerMenuButton-serverMenuTitle"]{display: none;}.sidebar-container [class^="SidebarLibraryItem-action"]{width: 0px;}.sidebar-container{width: 65px;}';
		hideSidebarCSS += '.sidebar-container:hover [class^="SidebarLink-title"], .sidebar-container:hover [class^="SidebarServerLibraries-librariesTitle"], .sidebar-container:hover [class^="SidebarList-sidebarListHeader"]{font-size: inherit;}.sidebar-container:hover [class^="SidebarLibrariesActions-actions"], .sidebar-container:hover [class^="SidebarLink-children"], .sidebar-container:hover [class^="ServerMenuButton-serverMenuTitle"]{display: inherit;}.sidebar-container:hover [class^="SidebarLibraryItem-action"]{width: inherit;}.sidebar-container:hover{width: inherit;}';
		$('head').append('<style type="text/css">'+ hideSidebarCSS +'</style>');
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

function internalLink(thelink)
{
	var pagecontainer = $('.ReactSidebarPageView-pageContainer-1bcfz');
	var newhtml = "<iframe id='PlextrasIframe' width='100%' height='100%' src='" + thelink + "'>";
	pagecontainer.html(newhtml);
}
