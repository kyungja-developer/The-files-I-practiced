//반복문 : 특정 작업을 반복
//변수선언 , 조건, 한번 반복할 때마다 뭘 할거냐
//이 세가지가 for()괄호 안에 들어감
//++,--는 1씩 더하고 빼기
//+=n, -=n은 n씩 더하고 빼기
for (let i = 10; i >= 0; i -= 2) {
  console.log(i);
}
for (let a = 0; i < 10; i++) {//마지막 조건에 ;안붙인다는거 기억하자 쓰면 오류난다!
  console.log(i);
}

//반복문 배열과 함께 쓰기
const names = ["멍멍이", "야옹이", "멍뭉이"];

for (let b = 0; b < names.length; b++) {
  console.log(names[b]); //b가 0,1,2니까
}
//반복문은 어떤 조건이 만족되지 않을 때까지 반복함
//따라서 조건에 만족하지 못하면 멈추는 것.




//while
let c = 0; //변수의 초기값이 반복문의 바깥에서 이뤄졌고

while (c < 10) {
  //조건을 쓰고
  console.log(c);
  c++; //변수에 변화를 주는 부분이 코드블럭 내부에 들어감
}
//while문에선 언젠가 조건이 false가 되게끔 해야함
//그렇지 않으면 영원히 반복
//for보다 조건이 까다로운 경우 while을 사용함


let d = 0;
let isFun = false;

while (!isFun) {//!붙였으니까 true일 때 실행하고,  false면 종료하라는 뜻
  console.log(d);
  d++;
  if (d === 30) {
    isFun = true;
  }
}



//for...of = 배열을 다룰 때 사용
//굳이 안사용해도 됨
const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
  //여기서 let은 numbers의 배열들인 10, 20, 30, 40, 50 를 나타낸다
  //꼭 이름이 number가 아니어도 됨
  //numbers의 배열을 나타내는 이름을 정해주면 됨
  console.log(number);
}

for ( let e = 0; e < numbers.length; e++ ) {
  console.log(numbers[e]);
}


//-------------------------------------
const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2
};
//객체에 있는 키들을 배열로 가져오는 방법 : keys
console.log(Object.keys(doggy));
//객체의 키값('멍멍이' 등)들을 배열로 가져오는 방법 : values
console.log(Object.values(doggy));
//객체의 키와 키값들을 배열로 가져오는 방법 : entries
console.log(Object.entries(doggy));
//-------------------------------------


//for...in
//for...in
const kitty = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2
};

for (let key in kitty) {
  console.log(key); //키값 받아오기
  console.log(`${key}: ${kitty[key]}`); //키와 키값 받아오기
}



//continue 
for (let f = 0; f < 10; f++) {
  if (f === 2) continue; //특정 조건이 만족됐을 때 그 다음 루프를 하라
  //이 구간이 스킵됨
  console.log(f);
  if(f === 5) break;//이 조건을 만족시키면 멈춰라.
}
//if(f === 2) continue;와
/*
if(f === 2){continue}는 똑같은 코드임
한 줄짜리 if문은 {}블록생략 가능 */




//예시1 만들어보기 (함수와 배열, 반복문을 사용하여)
function sumOf(numbers) {
  let sum = 0;
  for (let f = 0; f < numbers.length; f++) {
    sum += numbers[f]; //+= 는 x += y 가 x = x+y라는 뜻
  }
  return sum; //sum의 결과물을 return한다
}
const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);


//예시2
//숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중
//3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해자.
function biggerThanThree(numbers) {
  const arrangement = [];
  for (let g = 3; g < numbers.length; g++) {
    if (numbers[g] > 3) {
      arrangement.push(numbers[g]);
    }
  }
  return arrangement;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));

