// main.js
(function($){

	var win =$(window);
	var winH = win.height();

	var addBannerBox = $('#adBannerBox');
	var storyBox = $('#storyBox');
	var videoBox = $("#videoBox");
	addBannerBox.height(winH);
	storyBox.height(winH);
	videoBox.height(winH);

	win.resize(function(){
		addBannerBox.height(winH);
		storyBox.height(winH);
		videoBox.height(winH);
	});

	var timed = 500;
	//ajax--------------------------------------

	var headBox = $('#headBox');
	headBox.load('./header_pg.html');
	var footBox = $('#footBox');
	footBox.load('./footer_pg.html');

	// scrollIcon-----------------------------
	var scrollIcon = $('.scroll_icon');
	function loopBoat(){scrollIcon.animate({bottom:'2%'},500).animate({bottom:0},500,loopBoat);}
	loopBoat();
	// slide-----------------------------------
	var slideArea= $('.slide_area');
	var slideBox = $('.slide_box');
	var slideLi = slideBox.children('div');
	var indiLi = $('.indicator').find('li');
	var indiLiLink = indiLi.find('a');

	slideBox.parent().css({overflow:'visible'});

	var i = 0;
	var n = 0;


	var bool = true;

	var FadeFn = function(n,k){
	if( k !== n ){
		slideLi.eq(n).css({zIndex:5, display:'block'});
		indiLi.eq(n).addClass('action');
		indiLi.eq(n).siblings().removeClass('action');

		slideLi.eq(k).stop().fadeOut( function(){
			slideLi.eq(n).css({zIndex:10});
			slideLi.eq(n).siblings('li').css({zIndex:0});
			bool = true;
		});
	}
};
	indiLiLink.on('click',function(e){
		e.preventDefault();

		k = n;
		n = $(this).parent().index();
	
		FadeFn(n, k);	
	})
// ===============================================================


})(jQuery);