////////////////////////////////////////////////////
//////////////////Settings//////////////////////////
////////////////////////////////////////////////////
var delayInt = 2500;
var cssBGColor = '#3f4245';
var cssTopbarColor = 'Black';
var showCustomBackgroundImage = false;
var autohideSidebar = true;
var autoHideSidebarMobileOnly = false;
var biggerThumbnailsOnMobile = true;
var showArtWorkBackground = true;
var showEpisodeSpecificArtwork = false;
var ShowExpandedExtras = true;
var hideMovieExtras = false; //NOTE!!!: ShowExpandedExtras takes priority
var hideCastList = false;
var hideRelatedMedia = false;
var autoSignIn = false;
var customHeader = "Custom Links";
var customLinks = {'Home':'javascript:switchPort(80)', 'Requests':'javascript:switchPort(3000)', 'Uptime':'javascript:internalLink("https://stats.uptimerobot.com/q7BGEHzZz")', 'GitHub':'https://github.com/andrewiankidd/Plextras.js'};
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

var ua = navigator.userAgent;

if (ua.includes('PlexMediaPlayer')){
	alert('Loading Plextras for PMP...!');
}

//mobile checks
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

//yay for jquery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

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
	loadSidebarSettings();

	//wait a bit to load custom section
	setTimeout(
		function()
		{			
			loadExtraSettings();
			loadCustomSection();
		},
	delayInt);
}

function loadCustomStyles(){

	if (biggerThumbnailsOnMobile==true && isMobile==true)
	{
		var thumbnailcss = '[class^="MetadataPosterCard-card-"], [class^="MetadataPosterCard-cardContainer-"], [class^="MetadataPosterCard-cardContainer-"]{width:100%!important;height:100%!important;}[class^="PrePlayArtwork-imageContainer-"] + div{width:80%!important;height:20%;}[class^="PrePlayMetadataContent-content-"]{padding-left:0px!important;margin-top: 50%;font-size:large;}[class^="Measure-container-"]{font-size:x-large;}';
		$('head').append('<style type="text/css">'+ thumbnailcss +'</style>');
	}

	if (cssBGColor!=false)
	{
		var bgcolcss = '#content{background-color: '+cssBGColor+'}';
		$('head').append('<style type="text/css">'+ bgcolcss +'</style>');
	}
	
	if (cssTopbarColor!=false)
	{
		var topbarcolcss = '.nav-bar{background-color: '+cssTopbarColor+'}';
		$('head').append('<style type="text/css">'+ topbarcolcss +'</style>');
	}

	if (showArtWorkBackground==true)
	{
		//all credit to https://github.com/uzegonemad/plexbgartwork
		console.log('[Plextras.js] Adding artwork mod');
		$.get( "https://raw.githubusercontent.com/uzegonemad/plexbgartwork/master/plexbgartwork.css", function( data ) {
		  $('head').append('<style type="text/css">'+ data +'</style>');
		});
	}

	if (showCustomBackgroundImage==true)
	{
		var bgcss = '#content{background-image: url("https://i.imgur.com/Ynz8mjw.png");background-repeat: repeat-xy;}';
		$('head').append('<style type="text/css">'+ bgcss +'</style>');
	}
	
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

function loadExtraSettings(){
	
	if (showEpisodeSpecificArtwork==true)
	{
		console.log('[Plextras.js] Adding per-episode artwork mod (messy)');
		if ($('[class^="PageHeaderLeft-pageHeaderLeft-"] a:last').text().indexOf("Season") >= 0)
		{
			var tvThumb = $('[class^="PosterCardImg-imageContainer-"] div').css('background-image');
			$('head').append('<style type="text/css">[class^="PrePlayArtwork-imageContainer-"] div{background-image: '+ tvThumb +'!important; transition: 0.5s;}</style>');
		}		
	}
	
	if (autoSignIn!=false)
	{
		$('#username').val(autoSignIn[0]);
		$('#password').val(autoSignIn[1]);
		$('.btn-lg').trigger('click');
	}
}

function loadSidebarSettings(){

	//hide sidebar
	console.log('[Plextras.js] isMobile: ' +isMobile.matches);
	if (autohideSidebar==true || (autoHideSidebarMobileOnly==true && isMobile==true)){
		//inject CSS
		console.log('[Plextras.js] Hiding sidebar');
		var hideSidebarCSS = '.page-container{margin-left:0px;} .sidebar-container{transition: 0.25s;}';
		hideSidebarCSS += '.sidebar-container [class^="SidebarLink-title"], .sidebar-container [class^="SidebarServerLibraries-librariesTitle"], .sidebar-container [class^="SidebarList-sidebarListHeader"]{font-size: 0px;}.sidebar-container [class^="SidebarLibrariesActions-actions"], .sidebar-container [class^="SidebarLink-children"], .sidebar-container [class^="ServerMenuButton-serverMenuTitle"]{display: none;}.sidebar-container [class^="SidebarLibraryItem-action"]{width: 0px;}.sidebar-container{width: 65px;}';
		hideSidebarCSS += '.sidebar-container:hover [class^="SidebarLink-title"], .sidebar-container:hover [class^="SidebarServerLibraries-librariesTitle"], .sidebar-container:hover [class^="SidebarList-sidebarListHeader"]{font-size: inherit;}.sidebar-container:hover [class^="SidebarLibrariesActions-actions"], .sidebar-container:hover [class^="SidebarLink-children"], .sidebar-container:hover [class^="ServerMenuButton-serverMenuTitle"]{display: inherit;}.sidebar-container:hover [class^="SidebarLibraryItem-action"]{width: inherit;}.sidebar-container:hover{width: inherit;}';
		$('head').append('<style type="text/css">'+ hideSidebarCSS +'</style>');
	}
}


function loadCustomSection(){
	console.log('[Plextras.js] Adding custom links section');

	//locate navigation sidebar
	var navdiv = $('div[role="navigation"]').parent();

	//copy the 'Online Content' section as a template
	var newsec = $('div[role="navigation"]:last').clone();
	newsec.attr('class', 'customSection');

	//edit Section Header name
	newsec.find('div[role="header"]').html(customHeader);

	//copy Recommended link as template
	var linktemplate = newsec.find("div[class^='SidebarListItem-sidebarListItem-']:last");

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
