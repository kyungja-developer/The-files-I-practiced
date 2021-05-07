//forEach

const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

//print의 파라미터는  superheroes의 배열들
//hero는 배열들 전체를 아우르는 이름정도인가?
function print(hero) {
  console.log(hero);
}
//forEach();함수
superheroes.forEach(function (hero) {
  console.log(hero); //forEach함수를 쓰면서 위에서 function만들어줄 필요 없이 바로 function을 만들어줄 수고 있음
});
//superheroes.forEach(print)랑 위에거랑 같은 것.
/*
superheroes.forEach(hero =>{
  console.log(hero);
});               화살표 함수로도 가능
*/

//한마디로 배열안에 있는 원소들을 가지고 작업을 일괄적으로 하고싶을 때 사용





//map

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}
/*또는 forEach구문으로 이렇게 가능
array.forEach(n => {
  squared.push(n*n);
});
*/

console.log(squared);

//그렇다면 map함수로는?!
//배열을 가지고 전체적으로 변환을 해주고 싶을 때 사용하는 내장함수

const a = [1, 2, 3, 4, 5, 6, 7, 8];

const square = (n) => n * n;
const squared = a.map(square);
//const squared = a.map(n => n* n;);
//square를 선언할 필요 없이 map의 파라미터로 바로 넣어줄 수 있음

console.log(squared);


//활용예시-----------------------------------------------------------------------------------
const items = [
  {
    id: 1,
    text: "hello"
  },
  {
    id: 2,
    text: "bye"
  }
];

const texts = items.map((item) => item.text);
console.log(texts);






//indexOf-----------------------------------------------------------------------------------
const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

const index = superheroes.indexOf("닥터 스트레인지");
console.log(index);
//내가 찾고싶은 항목이 몇 번째 인지 보여주는 내장함수
//불리언이나, 숫자, 문자열이면 indexOf로 할 수 있다
//근데 객체이거나 특정 값이랑 일치하는 것 말고 특정 조건으로 찾는다 하면?
//findIndex

const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true
  },
  {
    id: 2,
    text: "함수 배우기",
    done: true
  },
  {
    id: 3,
    text: "객체와 배열 배우기",
    done: true
  },
  {
    id: 4,
    text: "배열 내장함수 배우기",
    done: false
  }
];

const index = todos.indexOf(3);
console.log(index); //-1이 나옴(일치하는 것이 없다는 것)

//따라서 indeIndex를 써야함
//findIndex에 넣을 파라미터는 함수임.-----------------------------------------------------
//그 조건을 입력하고 조건에 맞는 일치원소를 몇 번째인지 알려주는 것
const indexx = todos.findIndex((todo) => todo.id === 3);
console.log(indexx); //2

const todo = todos.find((todo) => todo.done === false);
console.log(todo); //{id: 4, text: "배열 내장함수 배우기", done: false}
//find----------------------------------------------------------------------------------
//이것은 순서가 아니라 그 값 자체를 보여줌
