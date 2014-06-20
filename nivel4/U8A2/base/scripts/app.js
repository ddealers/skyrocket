$(document).ready(function(){
	window.modal = {
		inp: $('.modal input'),
		btn: $('.modal button'),
		m: $('.modal'),
		hide: function(){
			TweenLite.to(modal.m, 0.3, {alpha: 0, onComplete: function(){
				TweenLite.set(modal.m, {display:'none'});
			}});
		},
		show: function(){
			TweenLite.set(modal.m, {display:'block'});
			TweenLite.to(modal.m, 0.3, {alpha: 1});
		},
		clear:function(){
			modal.inp.val('');
		},
		init: function(){
			modal.btn.on('click', function(e){
				event = new Event('keydown');
				event.which = 13;
				window.dispatchEvent(event);
				modal.hide();
			});
			modal.hide();
		}
	};
	window.oda = new window[$('title').text()]()
	$(window).on('resize', function(){
		oda.resize();
	});
	WebFontConfig = {
		active: function(){
			if( oda.initialize ) oda.initialize();
			if( oda.init ) oda.init();
			if( modal.init ) modal.init();
		},
		custom: {
			families: ['Quicksand','Dosis','Roboto'],
			urls: '/css/fonts.css'
		}
	}
	WebFont.load(WebFontConfig);
})