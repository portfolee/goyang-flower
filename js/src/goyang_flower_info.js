// goyang_flower_info.js
(function($){
	var win =$(window);
	var winH = win.height();

	var viewBox = $('#viewBox');
	var guideBox = $('#guideBox');
	var contentBox = $('#contentBox');
	viewBox.height(winH);
	guideBox.height(winH/2);
	contentBox.height(winH);

	win.resize(function(){
		viewBox.height(winH);
		guideBox.height(winH/2);
		contentBox.height(winH);
	});

	//ajax--------------------------------------

	var headBox = $('#headBox');
	headBox.load('./header_pg.html');
	var footBox = $('#footBox');
	footBox.load('./footer_pg.html');

})(jQuery);