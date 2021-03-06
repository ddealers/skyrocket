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
		custom: {
			families: ['Quicksand','Dosis','Roboto', 'Browallia New'],
			urls: '/css/fonts.css'
		}
	}
	WebFont.load(WebFontConfig);
})