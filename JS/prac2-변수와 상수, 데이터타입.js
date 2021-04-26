//const상수를_지칭하는_이름
/*ex)
5와 10을 더해서,
3으로 나누어 나머지가 0이면, '야호3'을 출력하고,
5로 나누어 나머지가 0이면, '야호5'를 출력한다.*/

const sum = 5 + 10;

if (sum % 3 === 0) {
    console.log('야호3');
}

if (sum % 5 === 0) {
    console.log('야호5');
}

/*상수는 한번 값이 정해지면 다른 값으로 변경이 불가
선언하면서 바로 값을 할당해야함
*/

 const 상수를지칭하는이름 = 값;

------------------------------------------------------------------------



//변수는 여러번 값을 할당할 수 있음
 /*let 변수를_지칭하는_이름;
 (let을 사용하면 아직 값이 할당되지 않은 undefined값을 가지게 됨)
 ex)
 5와 10을 더해서,
 sum이라는 이름의 상수에 보관한 뒤,
 3으로 나누어 나머지가 0이면, '야호3'을 출력하고,
 5로 나누어 나머지가 0이면, '야호5'를 출력.
 result라는 변수는 3으로 나누어 떨어지거나, 5로 나누어 떨어지면 true라는 값을 가지고,
 아니면 false라는 값을 가진다.
 (따라서 변수는 값을 재할당 할 수 있음.
 하지만 아직 선언하지 않은 식별자엔 값을 할당할 수 없음.)*/

 const sum = 5 + 10;
 let result = false;

 if (sum % 3 === 0){
     console.log('야호3');
     result = true;
 }

  if (sum % 5 === 0){
     console.log('야호5')
     result = true;
 }
 
 console.log(result);


//---------------------------------------------------------
//특정 이름에 특정 값을 넣는것 = 선언
//변수 : 바뀔 수 있는 값
let value = 1;
console.log(value);
value = 2;//언제든 값이 변할 수 있는 것이 변수!
console.log(value);

let value = 1;//하지만 같은 변수를 또 선언할 수 없음. 오류남!


//상수 : 한 번 값을 넣으면 바꿀 수 없음. 고정적!
const a = 1;
a = 2; //값을 바꿀 수 없음.
const a = 2; //같은 상수 또 선언 불가.


//var는 옛날 것으로 지금은 권장하지 않음.
//let과 비슷하지만 차이점은 같은 변수를 또 선언할 수 있다는 것.
var a = 1;
var a = 2;



//---------------데이터타입
let value = 100;
let text = 'hello';//문자열 = 텍스트
let name = "헬로우 자바스크립트";//문자열 방식을 ''나 ""나 상관없음.
//마지막의 ;은 넣든 안넣든 상관없음.

let good = true;
let loading = false;
//boolean은 두가지밖에 없음. 참 거짓.

let g = null; //정말 '없다'
let something = undefined; //'아직'정해지지 않았다.

let friend = null;
let criminal = undefined;
console.log(criminal);



//=는 대입연산자
let value = 1; //1을 value의 값으로 한다. 1을 value에 대입한다!
value += 3; //value에 3을 더한다 = 4
value -= 2; // = 2
value *= 3; // = 6
value /= 3; // = 2
console.log(value);

//산술연산자
let a = 1 + 2;
console.log(a);


let b = 2;
console.log(b++);
console.log(b);
console.log(++b);

let c = 2;
console.log(c--);//2
console.log(c);//1
console.log(--c);//0

//n++, n--은 우선 보여주고 다음 것에서 더하거나 뺀다
//++n, --n은 앞의 것을 먼저 더하거나 빼고 값을 보여준다


//----------------------------------------
//NOT == !
// AND == && 
//OR == ||
//우선순위는 ! > && > ||

const a = !true; //!는 특정 boolean을 반전시킨다
console.log(a);

const b = true & true; //양 쪽의 결과가 둘다 true여야만 값이 true가 된다. 
console.log(b);

const c = true || false;//둘 중 하나라도 true라면 값은 true
console.log(c);

const value = !(true && false || true  && false || !false);
// -> !(true && false || true && false || true);
// -> !(false || false || true);
// -> !(false || true)
// -> !(true)
// -> 결국은 false
console.log(value);


