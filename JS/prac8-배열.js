//배열
//배열안에 종류는 상관없음. 숫자든 문자열이든 객체든~
const array = [1, "blabla", {}];
console.log(array);
console.log(array[0]);//1
console.log(array[3]);//object
console.log(array[4]);//4번째는 아무것도 없기때문에 undefined
//첫번째는 0부터 시작(순서)

const objects = [
    {name : '멍멍이'},
    {name : '야옹이'}
  ];
  console.log(objects[1])
  //n번째 배열을 조회하고 싶을 땐
  //객체이름 + 대괄호 안에 순서




  //배열에 새로운 항목 추가하기
  //push함수 사용
const objects = [{ name: "멍멍이" }, { name: "야옹이" }];
console.log(objects.length);
objects.push({ name: "멍뭉이" });
console.log(objects);//(3) [Object, Object, Object]

//배열의 크기 = 배열에 몇 개가 들었나 보는 것
//length함수
console.log(objects.length);

//정리
const a = ["a", true, { a: 1 }, [1, 2, 3, 4]];
console.log(a[2]);
a.push(7);
console.log(a);
console.log(a.length);




