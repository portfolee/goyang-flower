// header.js
// headBox 용 js
(function($){


	var headBox = $('#headBox');

	var headBoxWrap = headBox.parent('div');
	var headBoxH = headBox.css('height');
	var headBoxBg = headBox.css('backgroundColor');

var gnbArr = [
	{title: '국제꽃박람회', // gnbArr[0].title
	 subList : [  // gnbArr[0].subList  
	 // gnbArr[0].subList[0].linkName , gnbArr[0].subList[0].link
		 {linkName : '행사개요', link : './goyang_flower.html'}, 
	 // gnbArr[0].subList[1].linkName , gnbArr[0].subList[1].link
	 {linkName : '전시안내', link : './goyang_flower_info.html' },
	 // gnbArr[0].subList[2].linkName , gnbArr[0].subList[2].link
		 {linkName : '편의시설',  link : '#'},
		 {linkName : '오시는길',  link : '#'}
	]},
	{title: '고양가을꽃축제',  //gnbArr[1].title
	 subList : [     // gnbArr[1].subList
		 {linkName : '행사개요', link : '#'},
		 {linkName : '전시안내', link : '#' },
		 {linkName : '편의시설',  link : '#'},
		 {linkName : '오시는길',  link : '#'}
	]},
	{title: '플라워북카페',  // gnbArr[2].title
	 subList : [
		 {linkName : '시설안내', link : './book_cafe.html'},
		 {linkName : '북카페/플라워샵', link : '#' },
		 {linkName : '플라워아카데미',  link : '#'},
		 {linkName : '이벤트',  link : '#'}
	]},
	{title: '정보센터',
	 subList : [
		 {linkName : '공지사항', link : '#'},
		 {linkName : '게시판', link : '#' },
		 {linkName : '홍보자료',  link : './gallery.html'},
		 {linkName : '언론보도',  link : '#'}
	]},
	{title: '커뮤니티',
	subList : [
		{linkName : '뉴스레터', link : '#'},
		{linkName : '시민의소리', link : '#' },
		{linkName : '주변관광지',  link : '#'},
		{linkName : 'FAQ',  link : '#'}
 ]}
 ];

// var gnbTitleLink = './goyang_flower.html'
// 									 './flower_fes.html'
// 									 './book_cafe.html'
// 									 './gallery.html'
// 									 './community.html'


 $('#navBox').append('<div class="unb_box"></div>');
 $('#navBox').append('<div class="gnb_box"></div>');
 var gnbBox = $('.gnb_box');
gnbBox.append('<ul class="gnb_area clearfix"></div>');
var gnbArea = gnbBox.children('.gnb_area');

var i=0;
var gnbDt, gnbTitle, gnb_sub, gnbSubLength, gnbSubLink, gnbSubText, gnbSubHref;
for(; i < gnbArr.length; i++){
	gnbArea.append('<li><dl> <dt></dt> <dd></dd> </dl></li>');

	gnbDt = gnbArea.children('li').eq(i).find('dt');
	gnbDt.attr({tabIndex:0});
	gnbTitle = gnbArr[i].title;

	gnbDt.text( gnbTitle );

	gnbArea.find('dd').eq(i).append('<ul class="gnb_sub"></ul>');
	gnb_sub = gnbArea.find('.gnb_sub');	
	
	gnbSubLength = gnbArr[i].subList.length; 
	for(var j = 0; j < gnbSubLength; j++){
		gnb_sub.eq(i).append('<li><a href=""></a></li>');
		gnbSubLink = gnb_sub.eq(i).find('li').eq(j).find('a');
		gnbSubText = gnbArr[i].subList[j].linkName;
		gnbSubHref = gnbArr[i].subList[j].link;
		gnbSubLink.text(gnbSubText);
		gnbSubLink.attr({href:gnbSubHref});
	}

}// ---------------------------------------

var gnbList = gnbArea.children('li');
var gnbListLength = gnbList.length;
gnbList.css({width:100 / gnbListLength + '%'});

// --------------------------------------------
gnbArea.find('dd').hide();

gnbArea.on('mouseenter', function(){
	gnbArea.find('dl').addClass('action');
	gnbArea.find('dd').stop().slideDown();
});
gnbArea.on('mouseleave', function(){
	gnbArea.find('dl').removeClass('action');
	gnbArea.find('dd').stop().slideUp();
});

// mobile========================================

var gnbBtn = $('.gnb_btn');
var mobGnb = $('.mob_gnb');
var hide = $('.hide');

gnbBtn.on('click',function(e){
	e.preventDefault();
	
	if( mobGnb.is(":visible") ){
		mobGnb.slideUp();
	}else{
		mobGnb.slideDown();
	}	
})



// gnbBtn.on('click',function(e){
// 	e.preventDefault();

// 	mobGnb.stop().slideDown();
// })
// gnbBtn.on('blur',function(e){
// 	e.preventDefault();

// 	mobGnb.stop().slideUp();
// })




})(jQuery);
