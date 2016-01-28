/*
    STICKY-HEADER-LAZY.JS - Last updated: 18.01.16
*/
//-----------------------------------------------------------------
// http://osvaldas.info/examples/auto-hide-sticky-header/
//-----------------------------------------------------------------

;( function( $, window, document, undefined )
{
	'use strict';

	var elSelector		= '.sticky-header',
		elClassHidden	= 'is-hidden',
		throttleTimeout	= 500,
		$element		= $( elSelector );

	if( !$element.length ) return true;

	var $window			= $( window ),
		wHeight			= 0,
		wScrollCurrent	= 0,
		wScrollBefore	= 0,
		wScrollDiff		= 0,
		$document		= $( document ),
		dHeight			= 0,

		throttle = function( delay, fn )
		{
			var last, deferTimer;
			return function()
			{
				var context = this, args = arguments, now = +new Date;
				if( last && now < last + delay )
				{
					clearTimeout( deferTimer );
					deferTimer = setTimeout( function(){ last = now; fn.apply( context, args ); }, delay );
				}
				else
				{
					last = now;
					fn.apply( context, args );
				}
			};
		};

	$window.on( 'scroll', throttle( throttleTimeout, function()
	{
		dHeight			= $document.height();
		wHeight			= $window.height();
		wScrollCurrent	= $window.scrollTop();
		wScrollDiff		= wScrollBefore - wScrollCurrent;

		var header = $('.global-header');
		var headerHeight = header.position().top + header.outerHeight(true);

		console.log(wScrollCurrent <= headerHeight);

		if (wScrollCurrent > headerHeight) {
			$element.addClass('is-compact');
		} else {
			$element.removeClass('is-compact')
		}


		// IF SCROLLED UP PAST HEADER
		if ( wScrollCurrent <= 0 ) {
			$element.removeClass(elClassHidden);
		}

		// IF SCROLLING UP - SHOW BAR
		if (wScrollDiff > headerHeight && $element.hasClass(elClassHidden)) {
			$element.removeClass(elClassHidden);
		}

		// SCROLLING DOWN - HIDE BAR
		else if (wScrollDiff < 0) {

			// HIT BOTTOM
			if (wScrollCurrent + wHeight >= dHeight && $element.hasClass( elClassHidden ) && wScrollDiff < headerHeight) {
				// $element.removeClass( elClassHidden );

			// NOT BOTTOM - SHOW BAR
			} else {
				$element.addClass( elClassHidden );
			}
		}
		wScrollBefore = wScrollCurrent;
	}));

})( jQuery, window, document );