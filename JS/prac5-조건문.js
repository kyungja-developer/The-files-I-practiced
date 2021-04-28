//호이스팅?

//함수먼저
function hello1(){
    console.log('hello');
}

hello1();

//함수 호출을 먼저
hello2();

function hello2(){
    console.log('hello');
}
//둘 다 가능임.
//아래 있는 함수를 위에서 호출할 수 있는 것이 호이스팅 현상!
//hoisting : 아래 있는 선언(만)을 끌어올리다


//두번째 예제------------------------------
age = 6;
age++;
console.log(age);

var age;
//틀린것이 없음.


//세번째 예제------------------------------
console.log(name);
//안나옴
name = 'Mark';

console.log(name);
//출력됨
var name = 'woo'
// -> 이 var name = 'woo'에서 var name만 올라가는 것이 호이스팅
팅
/*
실제론 
var name;
console.log(name);
name = 'Mark'
console.log(name);
name = 'Woo';
*/


//네번째 예제------------------------------
console.log(food);

food = 'Mark';

console.log(food);

let name; //let은 호이스팅 현상이 일어나지 않음. 
//다시말해, let은 위에 선언이 되어야 실행이 되기 때문!
//let name;이 아래 있어도 호이스팅이 되지 않기 때문에 호이스팅 문제가 발생되지 않는것
//let구문이 실행 안되는 것



//정리***
//함수와 var는 호이스팅 현상이 일어난다!
//let은 안일어난다
//호이스팅은 아래있는 선언'만' 끌어올린다