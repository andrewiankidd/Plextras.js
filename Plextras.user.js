// ==UserScript==
// @name         Plextras.js Userscript version
// @version      1
// @author       Andrewiankidd.co.uk
// @match        *://app.plex.tv/*
// @include     /^http(s)?:\/\/(.*):32400\//
// @downloadURL https://github.com/andrewiankidd/Plextras.js/blob/master/Plextras.user.js
// @updateURL https://github.com/andrewiankidd/Plextras.js/blob/master/Plextras.user.js
// ==/UserScript==

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.rawgit.com/andrewiankidd/Plextras.js/c6cc8ebd6932b8d97a9e9fb944ef056dc894ed6d/Plextras.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
})();
