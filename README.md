# Plextras.js
Minor customizations to plex/web plugin

## Options
- Set Custom background color (defaults to old plex/web gray)
- Minimize the sidebar to save screen space
- Show artwork as background like old plex/web - [@uzegonemad](https://github.com/uzegonemad/plexbgartwork)
- Add a new to the sidebar with customizable links and header

## Install
#### Installing server side:
1. Stick the js file in your plex/web plugin directory

    C:\Program Files (x86)\Plex\Plex Media Server\Resources\Plug-ins\WebClient.bundle\Contents\Resources

2. open index.html in the above directory and paste this at the end:

    <script src="/web/Plextras.js"></script>
    
3. Done! Everyone accessing your plex server via your IP (Not Plex.tv) will have these features as configured by you.

#### Installing client side:
1. Have TamperMonkey/GreaseMonkey/Any UserScript manager installed on browser
2. Install the user js from [here](https://github.com/andrewiankidd/Plextras.js/blob/master/Plextras.user.js)

    
## Screenshots
#### Sidebar Minimized and background artwork enabled:              
![](https://raw.githubusercontent.com/andrewiankidd/Plextras.js/master/Screenshots/Artwork_sidebar_enabled.PNG)

#### Sidebar Enabled, with custom section and backround artwork enabled:
![](https://raw.githubusercontent.com/andrewiankidd/Plextras.js/master/Screenshots/Artwork_sidebar_hover.PNG)
