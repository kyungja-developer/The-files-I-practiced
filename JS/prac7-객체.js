//객체는 
const dogName = '멍멍이';
const dogAge = 2;
console.log(dogName);
console.log(dogAge);

//위의 구문을 객체를 사용하여 아래처럼 사용가능
//이름:값(여기서 이름은 key임 -> key는 공백이 있으면 안됨.공백이 있으려면 ''로 감싸줘야함)
//하나의 이름:값을 다 치고 꼭 쉼표 넣어줘야함. 마지막에도!
const dog = {
  name: '멍멍이',
  age: 2,
  cute: true,
  sample:{
    a:1,
    b:2,
  };
};
console.log(dog);//dog에 대한 정보 확인 가능
console.log(dog.name);
console.log(dog.age);
console.log(dog.cute);

const cat = {
    name: 냥이,
    age: 2,
    'key with space': true,//키값에 공백넣기
  };


  //--------
  const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨',
  };
  
  const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카',
  };
  
  console.log(ironMan);
  console.log(captainAmerica);

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
  }
  print(captainAmerica);
  print(ironMan);




//객체 구조분해 문법 = 비구조화 할당(ex6문법)
  const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨',
  };
  
  const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카',
  };
  
  function print(hero) {//객체(hero)의 특정값(alias...)를 추출해 내는 것(아래 예시 씀)
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
  }

  print(captainAmerica);
  print(ironMan);

  /*

  function print(hero) {//객체(hero)의 특정값(alias...)를 추출해 내는 함수임
  const{alias, name, actor} = hero;          hero에서 {}안의 값을 추출하겠다      <-이렇게 빼와서 정의해줄 수 있는거임
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text)
  }

  또는

  function print({ alias, name, actor }) {               <-이렇게!
  //객체(hero)의 특정값(alias...)를 추출해 내는 함수임
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
    }

    요롷게도 써줄 수 있음
 */

    /*
    const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨"
};
const {name} = ironMan;                         <- 요롷게 따로 써줄 수도 있음
console.log(name);

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카"
};

function print({ alias, name, actor }) {
  //비구조할당 : 객체(hero)의 특정값(alias...)를 추출해 내는 것
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
print(captainAmerica);
print(ironMan);
*/


//객체안에 함수넣기
const dog = {
    name: "멍멍이",
    sound: "멍멍!",
    //say: function say(){}
    say() {
      //<- function 다음의 say는 생략가능, / :function say 둘 다 생략 가능
      //화살표 함수는 오류남.
      console.log(this.sound); //여기서 this는 얘가 포함된 그 객체, 한마디로 const의 'dog'임
    }
  };
  dog.say();
  
  const cat = {
    name: '야옹이',
    sound: '야옹~',
  
  };
  
  cat.say = dog.say; //dog의 say함수가 cat 객체에 등록됨. 
  dog.say();
  cat.say();

  //화살표 함수를 쓰면 this가 자신이 속한 곳을 인식하지 못해 오류가 나는 것.
  //객체 속 함수를 꺼내오면 인식하지 못한다
  