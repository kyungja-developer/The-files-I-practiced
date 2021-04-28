//if조건문
/*
if(조건){
    조건 충족시 실행할 것
}else{
    if를 충족 못할시 실행할 것
}
*/


const a = 1;
if (a + 1 === 2) {
  console.log("a + 1 이 2입니다.");
}
//if문 = 특정 조건이 만족될 때 결과값이 출력

const a = 1;
if (a + 1 === 2) {
  const a = 2;
  console.log("if문 안의 a 값은 " + a);
}
console.log("if문 밖의 a 값은 " + a);

//다른 블럭에선 같은 이름의 변수를 선언해도 오류없음.


const a = 10;
if (a > 15){
  console.log('a가 15보다 큽니다.');
}else{
  console.log('a가 15보다 크지 않습니다.');
}
//if else -if의 조건을 채우지 못했을 땐 else의 값을 실행한다


const a = 3;
if (a === 5) {
  console.log("5입니다!");
} else if (a === 10) {
  console.log("10 입니다.");
} else if(a === 7) {
  console.log("7 입니다!");
}else{
  console.log("5도 10도 아닙니다! 7도 아닙니다");
}
//if else if구문 = if의 조건을 실행하지 못할 때 다른 if구문(else if)의 조건을 본다. 이 if 구문도 실행하지 못할 때
//else를 실행한다
//else if는 여러개 입력 가능