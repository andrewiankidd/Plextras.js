# Plextras.js
Minor customizations to plex/web plugin

## Options
- Set Custom background color (defaults to old plex/web gray)
- Minimize the sidebar to save screen space
- Show artwork as background like old plex/web - [@uzegonemad](https://github.com/uzegonemad/plexbgartwork)
- Add a new section to the sidebar with customizable links and header
- Open services such as PlexRequests inside Plex/web
- Custom Background Image
- Expand 'Extras' display for movies (shows as grid instead of scroller)
- Hide Extras, Cast, Related Movies

## Install
#### Option 1a: Installing server side:
1. Copy Plextras.js to your plex/web plugin directory`

    `C:\Program Files (x86)\Plex\Plex Media Server\Resources\Plug-ins\WebClient.bundle\Contents\Resources`

2. open index.html in the above directory and paste this at the end:

    `<script src="/web/Plextras.js"></script>`
    
3. Done! Everyone accessing your plex server via your IP (Not Plex.tv) will have these features as configured by you.

#### Option 1b: Installing server side (With Auto-Updates)
    Warning: doing this means always using the default settings
    
1. Copy Plextras.js to your plex/web plugin directory`

    `C:\Program Files (x86)\Plex\Plex Media Server\Resources\Plug-ins\WebClient.bundle\Contents\Resources`

2. open index.html in the above directory and paste this at the end:

    `<script src="//andrewiankidd.co.uk/ext/mimefix/?gitfile=Plextras.js"></script>`
    
3. Done! Everyone accessing your plex server via your IP (Not Plex.tv) will have the default options enabled

#### Option 2: Installing client side:
1. Have TamperMonkey/GreaseMonkey/Any UserScript manager installed on browser
2. Install the user js from [here](https://github.com/andrewiankidd/Plextras.js/blob/master/Plextras.user.js) (click raw)
3. Done! Now the script will run on **any** plex/web server including plex.tv

#### Option 3: Installing to PMP
1. Copy Plextras.js to your PMP web-client js folder

    `C:\Program Files\Plex\Plex Media Player\web-client\desktop\js`

2. open index.html in the above directory and paste this at the end:

    `<script src="js/Plextras.js"></script>`
    
3. Done! Now PMP will run Plextras.js on startup
    
## Screenshots
#### Sidebar Minimized and background artwork enabled:              
![](https://raw.githubusercontent.com/andrewiankidd/Plextras.js/master/Screenshots/Artwork_sidebar_enabled.PNG)

#### Sidebar Enabled, with custom section and backround artwork enabled:
![](https://raw.githubusercontent.com/andrewiankidd/Plextras.js/master/Screenshots/Artwork_sidebar_hover.PNG)

#### PMP support
![](https://raw.githubusercontent.com/andrewiankidd/Plextras.js/6f752da221afeb1b6233ed6f7a95ae8f0cc0826f/Screenshots/pmp.png)

### Option to open links inside plex UI
![](https://github.com/andrewiankidd/Plextras.js/blob/a99638dc5e5f63fad31efcc169c3fd63200451c3/Screenshots/internallinks.png?raw=true)
