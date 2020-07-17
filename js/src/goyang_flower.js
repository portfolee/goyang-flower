// goyang_flower.js
(function($){
	var win =$(window);
	var winH = win.height();

	var viewBox = $('#viewBox');
	var infoBox = $('#infoBox');
	// var ticketBox = $("#ticketBox");
	viewBox.height(winH);
	infoBox.height(winH/1.5);
	// ticketBox.height(winH);

	win.resize(function(){
		viewBox.height(winH);
		infoBox.height(winH/1.5);
		// ticketBox.height(winH);
	});

	//ajax--------------------------------------

	var headBox = $('#headBox');
	headBox.load('./header_pg.html');
	var footBox = $('#footBox');
	footBox.load('./footer_pg.html');


})(jQuery);