$(document).ready(function(){
	window.oda = new window[$('title').text()]()
	$(window).on('resize', function(){
		oda.resize();
	});
	WebFontConfig = {
		active: function(){
			if( oda.initialize ) oda.initialize();
			if( oda.init ) oda.init();
		},
		google: {
			families: ['Quicksand','Dosis','Roboto']
		}
	}
	WebFont.load(WebFontConfig);
})