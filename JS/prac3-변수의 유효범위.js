//변수의 유효 범위 : scope of variables
/*
const, let의 유효 범위 -블록스코프 {}중괄호로 이루어진 덩어리
{}중괄호 안에서만 변수가 사용가능하며 이를 벗어나면 변수에 대해 알 수 없게됨. */
//블럭
{
    //
    const name = 'Mark';
    console.log(name);
}

//console.log(name);
//얘는 실행불가


//밖에서 안으로
//밖에서 먼저 정의를 해줬기 때문에 {}안에 들어가도 되고, 밖에 나와도 됨
let age = 37;
{
    age++;
    console.log(age);
}

console.log(age);


//중첩
//아무리 중첩돼 있어도 밖에서 정의된 변수 사용가능
//하지만 중첩의 안쪽에서 정의된 변수는 그 바깥쪽으로 나오면 인식불가!
{
    {
        {
            console.log(age);
        }
    }
}

//---------------------------------------------------------------
//var의 유효 범위 - 함수스코프
//function(){} <-함수
//ex)
var a = 0; //let처럼 언제든지 변수를 바꿀 수 있는 선언방식임

(function(){
    a++;
    console.log(a);
})();

console.log(a); //실행됨


(function(){
    var b = 0;
    console.log(b);
})();

b++;
console.log(b); //안나옴! 위의 ()안에서 정의된 변수기 때문에 밖에선 인식 불가.




//블록스코프와 함수스코프
var c =0;
{
    c++;
    console.log(c);
}
//가능
{
    var d = 0;
    console.log(d);
}
console.log(d);
//블록스코프에선 불가능하지만 이 var는 블록스코프에서 유효한 범위를 가지지않고,
//함수에서만 구분되는 스코프를 가지고있기 때문에
//블럭({})이 있든 없든 인식하기 때문에 가능!