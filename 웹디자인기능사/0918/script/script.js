//네비

//안에 있는 자식을 불러올 때 children을 쓴다
$('#nav > li').mouseover(function(){
	$(this).children('.submenu').stop().slideDown();
});

$('#nav > li').mouseleave(function(){
	$(this).children('.submenu').stop().slideUp();
});


//Fade_in, out슬라이드
$(function(){
	var num=0;
	$('#imgslide').eq(num).fadeIn();

	setInterval(function(){//n초 간격으로 움직여라(3초 설정함)
		$('#imgslide li').eq(num).fadeOut();

		if(num==2){
			num=0;
			$('#imgslide li').eq(num).fadeIn();
		}else{//num이 0,1 이면
			num++;//숫자 1을 더해주고(idx가 1,2됨)
			$('#imgslide li').eq(num).fadeIn();
		}
	},3000);//else가 실행되면 다시 setInterval아래줄로 돌아간다.
});			//그러면 ('#imgslide li').eq(num).이 eq(1)이 됨.
			//이제 다시 if실행! 아직 2가 안됐으니까 다시 else실행돼고
			//eq속 num은 2가됨.
			//이제 실행  또 가면 if를 실행할 수 있다. 2니까!
			//파일에 설명 첨부했다..

//Tab키 구현
$(function(){//script에서 코드들이 실행이
			//안될 때 function으로 한번 더 감쌀 것!
			//필수는 아니지만 안될댄 이렇게 해라~
	$('#no_tex').click(function(){
		$('#no_tex').addClass('on');
		$('#ga_tex').removeClass('on');
		$('#notice').show();
		$('#gallery').hide();
	});

	$('#ga_tex').click(function(){
		$('#ga_tex').addClass('on');
		$('#no_tex').removeClass('on');
		$('#gallery').show();
		$('#notice').hide();
	});
});


//레이어팝업
$('#pop').click(function(){
	$('#pop_body').show();
});

$('#pop_in button').click(function(){
	$('#pop_body').hide();
});