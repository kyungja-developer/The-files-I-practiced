//파라미터 = 함수에서 받아오는 값
//functionc(한수선언) add(함수이름) (a, b)(파라미터)

//예시1
function add(a, b) {
    return a + b;
    //return = 반환
  }
  
  const sum = add(1, 2);
  console.log(sum);

//예시2
  function hello(name){
    console.log('Hello, ' + name + '!');
  }
  
  hello('velopert');

//내가 만든 예시  
  function minus(a, b){
    return a - b;
  }
  
  const all = minus(5, 1);
  console.log(all);
  

//Templay Literal (ES2015버전 스크립트 문법)
/*
function hello(name){
    console.log('Hello, ' + name + '!');
}
  
hello('velopert');

  =

function hello(name){
  console.log(`Hello ${name}!`);    -> 물결표시 있는 ` 이거!
}

hello('velopert');

*/
function hi(name){
    return `hi ${name}~`;
  }
  //함수에선 return이 사용되는 순간 종료됨
  //return 이후에 뭔가 더 작업을 하면 실행되지 않음
  
  const result = hi('velopert');
  console.log(result);

//내가 만든 예시
function greet(name){
    return `Hi ${name}~`;
  }
  const a = greet('sun');
  console.log(a);


//그냥 함수 예시
function getGrade(score){
    if (score === 100){
      return 'A+';
    }else if(score >= 90){
      return 'A';
    }else if(score === 89){
      return 'B+';
    }else if(score >=80){
      return 'B';
    }else if(score === 79){
      return 'C+';
    }else if(score >= 70){
      return 'C';
    }else if(score === 69){
      return 'D+';
    }else if(score >= 60){
      return 'D';
    }else{
      return 'F';
    }
  }
  
  const grade = getGrade(98);
  console.log(grade);
  

//화살표 함수 (얘도 ES6에 해당하는 문법)
//const나 let으로 시작
//공식 : const 함수이름 = () =>{};
const add = (a, b) => {
    return a + b;
  };
  
  const sum = add(1, 2);
  console.log(sum);
  
  const hello = (name) => {
    console.log(`hello, ${name}!`);
  };
  hello('java');

  /*
//화살표 다음 바로 원하는 값을 입력 가능

const add = (a, b) => a + b;

const sum = add(1, 2);
console.log(sum); //3
 */

//***주의!***
//함수 함수이름 = (파라미터) => 반환할 값;
const naming = (name) => `hello ${name}!`;
//return일 땐 다른걸 변수선언 한 다음
const meet = naming('hehe');
//출력해야 함수가 실행된다
console.log(meet);


const calling = (name) => {
  console.log(`hello ${name}!!!`)
}
//console.log로 값을 반환할 땐 바로 함수 실행 가능
calling('gggg');