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


//filter
//파라미터는 함수로!
const tasksNotDone = todos.filter((todo) => !todo.done//todo.done === false와 같다);
console.log(tasksNotDone);

//todo.done만 쓰면 true인걸 가져오고
//todo.done === false면 false인 것만 가져온다





//splice 배열
//배열에서 특정 항목을 지울때
/*slice때문에 주석했음
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 1); //index부터 n개 지우겠다(indexOf는 내가 보고싶은 항목이 몇 번째인지 알려줌)
console.log(spliced); //splice돼서 지워진 값을 볼 수 있음
console.log(numbers);
*/

//slice
//기존의 배열을 건들이지 않음
//지정한 것만 잘라옴 복붙처럼
const numbers = [10, 20, 30, 40];

const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers);




//shift와 pop, unshift
//shift는 배열의 첫번째 원소를 하나씩 밖으로 꺼냄

const a = [10, 20, 30, 40, 50];

const value = a.shift();
a.shift();
a.shift();
a.shift();
a.shift();
a.shift();
console.log(value); //10
console.log(a); //20, 30, 40,50



//pop은 배열의 마지막 부터 하나씩 밖으로 꺼냄
const b = [10, 20, 30, 40, 50];
const value = b.pop();
const value = b.pop();
const value = b.pop();
const value = b.pop(); //계속 빼면 에러가 아니고 그냥 비어있는 배열이 됨
console.log(value);
console.log(b);


//unshift
const c = [10, 20, 30, 40, 50];
c.unshift(5); //맨 앞에 ()안의 원소를 배열에 추가함
console.log(c);

//push와 pop / shift와 unshift가 짝
const d = [10, 20, 30, 40];
d.push(50);//마지막에 더함
const value = d.pop();//마지막거 뺌
console.log(value);
console.log(d);

const e = [10, 20, 30, 40];
e.unshift(0);//맨 앞에 더함
const value = e.shift();//맨 앞에거 뺌
console.log(e);




//concat

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = [...arr1, ...arr2];
console.log(arr1);
console.log(arr2);
console.log(concated);
//concat은 기존의 배열을 건드리지 않음

//join - 배열 안에 있는 값들을 문자열 형태로 합쳐줄 때 사용
const arrr = [1, 2, 3, 4, 5];
console.log(arrr.join()); //배열을 쉼표 사이사이에 넣어 문자열로 만들어줌
console.log(arrr.join("!")); //문자열 사이에 무언가 추가 (쉼표 사이에 표시)
//join의 파라미터에는 배열을 어떻게 구분할지를 정의하는 것을 써줌
console.log(arrr.join(", "));
