
//네비
$('#gnb>li').mouseover(function(){
	$('.submenu').stop().slideDown();
	$('#back').stop().slideDown();
});

$('#gnb>li').mouseleave(function(){
	$('.submenu').stop().slideUp();
	$('#back').stop().slideUp();
});


//이미지슬라이드
start();

function start(){
	setInterval(function(){
		$('#imgs ul').delay(2000);
		$('#imgs ul').animate({marginTop:'-300px'},1000);
		$('#imgs ul').delay(2000);
		$('#imgs ul').animate({marginTop:'-600px'},1000);
		$('#imgs ul').delay(2000);
		$('#imgs ul').animate({marginTop:'0px'},1000);
	});
};

//레이어팝업(모달)
$('#pop').click(function(){
	$('#pop_body').show();
});

$('#pop_in button').click(function(){
	$('#pop_body').hide();
});