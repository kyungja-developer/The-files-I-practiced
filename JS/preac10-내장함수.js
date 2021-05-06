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