/*
    MAIN.JS - Last updated: 27.10.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar
    $('input, textarea').placeholder(); // IE9 Patch
});

$(window).load(function() {
    NProgress.done();

    // H5F.setup(document.getElementById("form")); // Patch IE9 for form validation
});

//-----------------------------------------------------------------
// Off Canvas Menu
//-----------------------------------------------------------------

var $offCanvasMenu = $("[data-off-canvas-menu]");

$offCanvasMenu.mmenu({ "offCanvas": { "position": "right" }});

$('.hamburger').bind('click', function(e) {
    e.preventDefault();
    $offCanvasMenu.trigger('open.mm');
});

//==================================================
//
//==================================================