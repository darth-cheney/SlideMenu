(function($){
 	$.fn.slideMenu = function(direction, tabElement, speed) {
 		menu = this;
 		speed = speed || 400;
 		
 		// If the window height is less than the computed menu height
 		// do not list a max-height. Otherwise, do so.
 		/* var menuMaxHeight = menu.outerHeight();
 		if(menuMaxHeight < $(window).height()) {
 			menuMaxHeight = $(window).height() * 0.75;
 		} */

 		// Set min-width and max-height for the element and clear positioning values
 		
 		// UPDATE: I've removed the max-height altogether. Too many problems on smaller screens.
 		
 		menu.css({
 			'min-width': '250px',
 			//'max-height': menuMaxHeight + 'px',
 			left: 'auto',
 			right: 'auto'
 		});

 		// Set up common variables
 		menuHeight = menu.outerHeight();
 		menuWidth = menu.outerWidth();
 		tabWidth = tabElement.outerWidth();
 		tabHeight = tabElement.outerHeight();
 		winHeight = $(window).height();
 		menuPadding = menu.css('padding-left');
 		slideUp = false;
 		menuHeightDiff = (winHeight - menuHeight) / 2;
 		tabHeightDiff = (menuHeight - tabHeight) / 2;

 		// Set the appropriate heights
 		menu.css('bottom', menuHeightDiff + 'px');
 		tabElement.css('bottom', tabHeightDiff + 'px'); 

 		// Check which side
 		if(direction == "left") {

	 		// Set the initial position for the elements
	 		tabElement.css({
	 			bottom: tabHeightDiff + 'px', 
	 			right: menuWidth - parseInt(menuPadding) - parseInt(menu.css('border-left-width')) + 'px',
	 			cursor: 'pointer',
	 		});


	 		// Position the element to the appropriate side of the screen
	 		menu.css('left', '100%');

	 		// Set the appropriate animation direction
	 		tabElement.click(function(){
	 			if(!slideUp) {
		 			menu.animate({
		 				left: $(window).innerWidth() - menuWidth + 'px',
		 			}, speed, function(){
		 				slideUp = true;
		 				menu.find('#firstname').focus(); // Focus on the first field when menu slides out
		 			});
		 		} else {
		 			menu.animate({
		 				left: '100%',
		 			}, speed, function(){
		 				slideUp = false;
		 			});
		 		}	
	 		});
	 	} else if (direction == "right") {
	 		
	 		// Set the initial position for elements
	 		tabElement.css({
	 			top: tabHeightDiff + 'px', //changed from bottom to top for IE8 bug
	 			left: menuWidth - parseInt(menuPadding) - parseInt(menu.css('border-right-width')) + 'px',
	 			cursor: 'pointer',
	 		});
	 		menu.css('left', (-1 * menuWidth + 'px'));

	 		// Set the appropriate animation direction and bind the click event
	 		tabElement.click(function(){
	 			if(!slideUp) {
	 				menu.animate({
	 					left: '0',
	 				}, speed, function(){
	 					slideUp = true;
	 				});

	 			} else {
	 				menu.animate({
	 					left: -1 * menuWidth + 'px',
	 				}, speed, function(){
	 					slideUp = false;
	 				});
	 			}
	 		});
	 	}
	 if(callback) {
	 	callback();
	 }		
 	return this;
 	}
 })(jQuery);