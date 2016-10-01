// ==UserScript==
// @name         youtube restore playlist controls
// @namespace    com.dev-zero.user-scripts
// @version      0.9.0
// @description  restore the playlist controls for prev and next video
// @license      GPLv3+
// @author       Stephan Sachse
// @website      https://github.com/stesachse/youtube-restore-playlist-controls
// @downloadURL  https://github.com/stesachse/youtube-restore-playlist-controls/raw/master/youtube-fix-playlist-controls.user.js
// @updateURL    https://github.com/stesachse/youtube-restore-playlist-controls/raw/master/youtube-fix-playlist-controls.meta.js
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /* unhide the links to prev and next */
    for (var a of document.querySelectorAll(
            '.playlist-behavior-controls > a.hid')) {
        a.classList.remove('hid');
    }

    /* move the links behind the shuffle-button */
    var new_parent = document.querySelector(
        '#watch-appbar-playlist > div > div.playlist-header > div.control-bar.clearfix > div.playlist-nav-controls'
    );
    var old_parent = document.querySelector(
        '#watch-appbar-playlist > div > div.playlist-header > div.control-bar.clearfix > div.playlist-behavior-controls'
    );

    if (new_parent === null || old_parent === null) {
        return false;
    }

    /* get the next button after the shuffle-button and insert before this
       button. or use null as reference and append to the end */
    var reference = new_parent.querySelector('button.shuffle-playlist + button');

    /* finally move all nodes to the new parent */
    while (old_parent.childNodes.length > 0) {
        new_parent.insertBefore(old_parent.childNodes[0], reference);
    }

    return true;
})();
