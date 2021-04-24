console.log('Hello JavaScript');
//EXPRESSION : 표현식은 값을 만들어내기 때문에 함수의 인자로 사용가능
/*
true
=true
26
=26
1000 + 900 + 90 + 4
=1994
"Anna"
="Anna"
"Hello" + "JavaScript"
="HelloJavaScript"
alert(1000 + 900 + 90 + 4);
=경고창에 값이 뜸
alert("Hello" + "JavaScript");
=경고창에 값이 뜸
*/
-------------------------------------------------------

//Statement
/*
하나 혹은 여러 개의 표현식이 모여 문장을 이룸.
모든 표현식은 문장이 될 수 있음.
(보통 문장의 끝엔느 세미 콜론을 붙임)
-
한 줄에 문장이 하나인 경우엔 세미 콜론을 붙이지 않아도 문제가 없지만,
관례적으로 붙임.
-
한 줄에 여러 문장을 적을 경우, 세미 콜론으로 문장 구분
마지막 문장은 세미 콜론을 붙이지 않아도 문제 없음
마지막 문장의 결과가 반환됨
-
조건문(if), 반복문(for)도 문장임
이 경우 마지막 }뒤에 세미콜론 붙이지 않음*/
-------------------------------------------------------

//Keywords
/*자바스크립트에서 특정한 목적을 위해 사용하는 단어
이러한 키워드들은 예약어로 지정돼 있음
-
var 변수선언 키워드.*/

//예약어
/*프로그램을 작성할 때 변수명, 함수명 등 이름으로 사용할 수 없는 단어
이미 뭔가 기능을 가지고 있기 때문
-
var return = '변수명';
여기서 return은 변수명으로 쓸 수 없음
function for() {}
에서 for은 함수명으로 쓸 수 없음.*/

/*
break
case
catch
continue
default
delete
do
else
finally
forfunction
ifin
instanceof
new
returnswitch
this
throw
try
typeof
varvoid
while
with
등
*/

//Future reserved Keywords
/*
앞으로 특정한 목적을 위해 사용할 가능성이 있어서 사용할 수 없는 예약어
abstract    boolean     byte
char    class   const   debugger    double
enum    export  extends finally
float   goto    implements  import
instanceof interface long
native  package private
protected   public  short
static  super   synchronized
thows   transient   volatile
*/


//식별자 identifier
/*
var name = 'Mark';
function hello(){}
var person = {name: 'Mark', age: 37};
-> 여기서 name, hello, person은 식별자다. 함수의 이름, 변수의 이름이 식별자.
var person = {} <-중괄호 안의 name, age도 식별자다. 식별자를 통해 이름을 짓고 부른다는 것.
**대소문자 구분!
ex)
var myName = 'Mark';
var myname = 'Mark';
이 두개는 다른 변수다
-
변수명은
'유니코드 문자', '$' '_' '숫자(0-9)' 사용 가능하지만,
숫자로 시작할 수는 없음.
'예약어'는 사용할 수 없고, '공백 문자'도 사용 불가
ex)
var name1;
var $name;
var _name
var 1name; //틀림
var 이름; //보통은 영문으로 씀
*/