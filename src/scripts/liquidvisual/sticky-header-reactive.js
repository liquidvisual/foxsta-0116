/*
    STICKY-HEADER-REACTIVE.JS - Last updated: 27.10.15
*/
//-----------------------------------------------------------------
// http://osvaldas.info/examples/auto-hide-sticky-header/
//-----------------------------------------------------------------

;( function( $, window, document, undefined )
{
	'use strict';

	var elSelector		= '.sticky-header',
		$element		= $( elSelector );

	if( !$element.length ) return true;

	var elHeight		= 0,
		elTop			= 0,
		$document		= $( document ),
		dHeight			= 0,
		$window			= $( window ),
		$body           = $('body'),
		wHeight			= 0,
		wScrollCurrent	= 0,
		wScrollBefore	= 0,
		wScrollDiff		= 0;

	$window.on( 'scroll', function()
	{
		elHeight		= $element.outerHeight();
		dHeight			= $document.height();
		wHeight			= $window.height();
		wScrollCurrent	= $window.scrollTop();
		wScrollDiff		= wScrollBefore - wScrollCurrent;
		elTop			= parseInt( $element.css( 'top' ) ) + wScrollDiff;

		var header = $('.global-header');
		var headerHeight = header.position().top + header.outerHeight(true);

		// SCROLLED TO TOP - BAR STUCK
		if (wScrollCurrent <= 0) {
			$element.removeClass('is-compact').css( 'top', 0);
		}
		// SCROLLS UP - BAR SLIDES UP
		else if (wScrollDiff > 0) {
			$element.addClass('is-compact').css( 'top', elTop > 0 ? 0 : elTop );
		}
		// SCROLL DOWN
		else if (wScrollDiff < 0) {
			// HITS BOTTOM - BAR SLIDES IN
			if (wScrollCurrent + wHeight >= dHeight - elHeight) {
				$element.css( 'top', ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 );

			} else { // SCROLL DOWN - BAR SLIDES IN
				$element.css( 'top', Math.abs( elTop ) > elHeight ? -elHeight : elTop);
			}
		}
		wScrollBefore = wScrollCurrent;

		// CHECK FOR WINDOW PAST HEADER
		if (wScrollCurrent > headerHeight) {
			$element.addClass('is-compact');
		} else {
			$element.removeClass('is-compact')
		}

		if (wScrollCurrent <= 0) {
			$body.addClass('is-top');
		} else {
			$body.removeClass('is-top');
		}

	});

})( jQuery, window, document );