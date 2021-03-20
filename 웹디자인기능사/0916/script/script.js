/*슬라이드 구현 시 작동이 되지 않는다면 html파일에서 script 연동한 것 중
우리가 만든 js파일(현재 열려있는 js문서) script태그에 defer="deference" 작성*/
//html을 로딩한 후 script를 로딩하여 실행하기 위함
//html을 읽다가 script를 만나면 html로딩을 멈춘 후
//script를 읽어버리는 상황 발생할 수 있음!


//네비
$('.nav>li').mouseover(function(){
	$('.submenu').stop().slideDown();
});

$('.nav>li').mouseleave(function(){
	$('submenu').stop().slideUp();
});


//슬라이드
start();

function start(){
	setInterval(function(){
		$('.imgs ul').delay(2000);
		$('.imgs ul').animate({'margin-top':'-300'}, 1000);
		$('.imgs ul').delay(2000);
		$('.imgs ul').animate({marginTop:'-600'}, 1000);
		$('.imgs ul').delay(2000);
		$('.imgs ul').animate({marginTop:'0'}, 1000);
	});
};


//공지사항&갤러리
$('.no_tex').click(function(){
	$(this).addClass('on');
	$('.ga_tex').removeClass('on');
	$('.gallery').hide();
	$('.notice').show();
});

$('.ga_tex').click(function(){
	$(this).addClass('on');
	$('.no_tex').removeClass('on');
	$('.notice').hide();
	$('.gallery').show();
});


//레이어팝업(모달)
$('.pop').click(function(){
	$('#pop_body').show();
});

$('.pop_in button').click(function(){
	$('#pop_body').hide();
});