//네비
$('.nav > li').mouseover(function(){
	$(this).children('.submenu').stop().slideDown();
});

$('.nav > li').mouseleave(function(){
	$(this).children('.submenu').stop().slideUp();
});

//이미지슬라이드
start();

function start(){
	setInterval(function(){
		$('.images ul').delay(2000);
		$('.images ul').animate({'margin-left':'-800'},1000);
		$('.images ul').delay(2000);
		$('.images ul').animate({'margin-left':'-1600'},1000);
		$('.images ul').delay(2000);
		$('.images ul').animate({'margin-left':'0'},1000);
	});
};

//팝업
$('#pop').click(function(){
	$('#pop_body').show();
});

$('.pop_in button').click(function(){
	$('#pop_body').hide();
});