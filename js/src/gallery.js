// gallery.js
(function($){
	var win =$(window);
	var winH = win.height();

	var viewBox = $('#viewBox');
	// var guideBox = $('#guideBox');
	var contentBox = $('#contentBox');
	viewBox.height(winH/1.5);
	// guideBox.height(winH/2);
	contentBox.height(winH*1.1);

	win.resize(function(){
		viewBox.height(winH/2);
		contentBox.height(winH*1.1);
	});

	// ===============================
	var thumList = [
		'gallery_img_01.jpg',
		'gallery_img_02.jpg',
		'gallery_img_03.jpg',
		'gallery_img_04.jpg',
		'gallery_img_05.jpg',
		'gallery_img_06.jpg',
		'gallery_img_07.jpg',
		'gallery_img_08.jpg',
		'gallery_img_09.jpg'
	];
	var bigList = [
		'gallery_img_01.jpg',
		'gallery_img_02.jpg',
		'gallery_img_03.jpg',
		'gallery_img_04.jpg',
		'gallery_img_05.jpg',
		'gallery_img_06.jpg',
		'gallery_img_07.jpg',
		'gallery_img_08.jpg',
		'gallery_img_09.jpg'
	];
var thumUrl = '../img/gallery/thum/';
var bigUrl = '../img/gallery/big/';

var galleryList = {
	thumUrl : thumUrl,
	thumList : thumList,
	bigUrl  : bigUrl,
	bigList  : bigList
};
	var thumUrl = '../img/gallery/thum/';
	var bigUrl = '../img/gallery/big/';

	var bigModal = $('.big_modal ');
	var contentArea = $('.content_area');
	var contentUl = contentArea.find('ul');

	var contentLi = '<li><a href="#"></a></li>';

	for(i=0; i<galleryList.thumList.length; i++){
		contentUl.append(contentLi);
		contentUl.find('li').eq(i).children('a').css({
			backgroundImage:'url('+thumUrl+galleryList.thumList[i]+')'
		});
	}

	var n=0;
	var conLink = contentUl.find('li').children('a');
  conLink.on('click', function(e){
		e.preventDefault();
		var itIndex = $(this).parent().index();
		n = itIndex;

		bigModal.find('.big_img').css({
			backgroundImage:'url('+bigUrl+galleryList.bigList[itIndex]+')',
			backgroundSize:'cover', backgroundPosition:'50% 50%',
			backgroundRepeat:'no-repeat'
		});
		bigModal.fadeIn(function(){
			$(window).on('keyup', function(evt){
				var keyCode = evt.keyCode;
				if(keyCode === 37) {
					n -= 1;
					if( n < 0 ){ n = galleryList.thumList.length -1; }
					bigModal.find('.big_img')
									.css({backgroundImage:'url('+bigUrl+galleryList.bigList[n]+')'});
									
				}else if(keyCode === 39){
					n += 1;
					if( n > galleryList.thumList.length -1 ){ n = 0; }
					bigModal.find('.big_img')
									.css({backgroundImage:'url('+bigUrl+galleryList.bigList[n]+')'});
									
				}else if(keyCode === 27){
					bigModal.fadeOut(400, function(){
						conLink.eq(0).focus();
					});
				}
			});	
		});
	});

	$('.big_modal').on('click', function(e){
		e.preventDefault();
		bigModal.fadeOut(400);
	});

		//ajax--------------------------------------

		var headBox = $('#headBox');
		headBox.load('./header_pg.html');
		var footBox = $('#footBox');
		footBox.load('./footer_pg.html');
})(jQuery);