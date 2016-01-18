/*
    UTILITIES.JS - Last updated: 27.10.15
*/
//-----------------------------------------------------------------
// Utilities
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //-----------------------------------------------------------------
    // Developer: COMMAND+S for screen width
    //-----------------------------------------------------------------

    $(document).keypress(function(event) {
        if (event.which == 115 && (event.ctrlKey||event.metaKey)||(event.which == 19)) {
            event.preventDefault();
            alert("(w) "+$(window).width()+" (h) "+$(window).height());
            return false;
        }
        return true;
    });

}(jQuery));

//==================================================
//
//==================================================