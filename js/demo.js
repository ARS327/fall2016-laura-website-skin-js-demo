// From https://php.quicoto.com/how-to-get-random-hex-color-with-javascript/
function random_color() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}

function clear() {
	$( 'body' ).removeAttr("style class");
	$( 'h1' ).removeAttr("style class");
	$( 'h2' ).removeAttr("style class");
	$( 'h3' ).removeAttr("style class");
	$( 'h4' ).removeAttr("style class");
	$( 'h5' ).removeAttr("style class");
	$( 'p' ).removeAttr("style class");
	$( 'a' ).removeAttr("style class");
	$( 'a:hover' ).removeAttr("style class");
}

function random_font() {
	var fonts = ["'Butterfly Kids', cursive", "'Princess Sofia', cursive", "'Bonbon', cursive"];
	var num = Math.floor((Math.random() * 3) + 0);
	return fonts[num];
}

function changeSkin() {
	$('#pink-button').click(function(event) {
		clear();
		
		$( 'body' ).addClass( 'pink-body' );
		$( 'h1' ).addClass( 'pink-heading' );
		$( 'h2' ).addClass( 'pink-heading' );
		$( 'h3' ).addClass( 'pink-heading' );
		$( 'h4' ).addClass( 'pink-heading' );
		$( 'h5' ).addClass( 'pink-heading' );
		$( 'p' ).addClass( 'pink-text' );
		$( 'a' ).addClass( 'pink-link' );
		$( 'a:hover' ).addClass( 'pink-link:hover' );
	});
	
	$('#blue-button').click(function() {
		// Too lazy to do this properly
		
		clear();
		
		$( 'body' ).addClass( 'blue-body' );
		$( 'h1' ).addClass( 'pink-heading' );
		$( 'h2' ).addClass( 'pink-heading' );
		$( 'h3' ).addClass( 'pink-heading' );
		$( 'h4' ).addClass( 'pink-heading' );
		$( 'h5' ).addClass( 'pink-heading' );
		$( 'p' ).addClass( 'pink-text' );
		$( 'a' ).addClass( 'pink-link' );
		$( 'a:hover' ).addClass( 'pink-link:hover' );
	});
	
	$('#random-button').click(function(event) {
		// Incredibly inefficient and discouraged. GitHub is down but when it is up, check out JSS.
		// Edit clear() function so it just removes the class attributes.
		
		clear();
	
		$( 'body' ).addClass( 'random-body' );
		$( 'h1' ).addClass( 'random-heading' );
		$( 'h2' ).addClass( 'random-heading' );
		$( 'h3' ).addClass( 'random-heading' );
		$( 'h4' ).addClass( 'random-heading' );
		$( 'h5' ).addClass( 'random-heading' );
		$( 'p' ).addClass( 'random-text' );
		$( 'a' ).addClass( 'random-link' );
		
		
		// INLINE CSS
		
		$( '.random-body' ).css({
			'background-color': random_color()
		});
		$( '.random-heading' ).css({
			'color': random_color(),
			'font-family': random_font(),
		});
		$( '.random-text' ).css({
			'color': random_color(),
			'width': Math.floor((Math.random() * 700) + 100),
		});
		$( '.random-link' ).css({
			'color': random_color()
		});
		
		// Need another library to implement rules for psuedo classes.
	});
}

$(document).ready(function(){
	changeSkin();
});