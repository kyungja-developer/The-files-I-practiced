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
  sample:{  //또 다른 객체를 넣을 수도 있음
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
  



  //getter함수 만들기
const numbers = {
  a: 1,
  b: 2,
  get sum(){
    console.log('sum 함수가 실행됩니다!');
    //get함수에선 무조건 어떤 값을 반환해줘야함
    return this.a + this.b;
  } 
};
console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
//getter함수는 특정 값을 조회하려고 할 때(호출이 아니라)
//특정 코드를 실행시키고 연산된 값을 반환해 조회하는 것.

//setter함수 만들기 - 특정 값을 바꿀 때마다 함수 실행
//값과 setter함수의 이름이 같을 순 없지만
//같은 이름의 set과 get함수는 만들 수 있음
const dog = {
  _name: '멍멍이',
  get name(){
    console.log('_name을 조회합니다..');
    return this._name;
  },
  set name(value){
    console.log('이름이 바뀝니다..' + value);
    this._name = value;
  }
};

console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog.name);

//다른 예시
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
  
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9; //값이 바뀔 때마다 함수실행(set함수)
console.log(numbers.sum);

//이렇게도
/*
const numbers = {
  a: 1,
  b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get sum() {
    console.log("sum");
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);   <-이렇게 함수를 조회할 때마다 함수를 실행함. 비효율적. 적절히 사용하자
*/


