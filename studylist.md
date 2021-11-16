# JavaScript

HTML과 상호작용하기 위해서 사용! HTML의 Element들은 JavaScript를 통해 **변경하고 읽을** 수 있음!

### var / const / let

- **variable** : 프로그램 언어에서 값을 저장하거나 유지하는 역할을 한다. <변수>
  카멜 케이스로 적어야함(veryLongVariableName)
- **const** : 바뀌지 않는 값(=상수)
- **let** : 새로운것을 생성할때 사용 ! / 바뀔수 있움

```javascript
const a = 5;
const b = 2;
// const myName = "miinii";
let myName = "miinii";

console.log(5 + 2);
console.log(5 / 2);
console.log(5 * 2);
console.log("hello " + myName); =>hello miinii

myName = "JeongMIN";

console.log("your new name is  " + myName) => hello JeongMin
```

##### <u>**const**를 *기본적*으로 사용하고 *업데이트*를 하고싶다면 **let**을 사용한다!!!</u>

var는 잘 안사용....ㅎ

---

## Data type

- 숫자 : 2+2
- 문자 : string(처음부터 끝까지 문자로 이뤄져있는거) -> " " / ' ' 안에 넣어서 사용가능
- Booleans
- null : 비어있다.
- undefined : 정의되지 않음

console.log(dataType); =>괄호안에 있는걸 출력

### Boolean

존재하는값 : **true** or **false**
true : on(=1) / false : off(=0)

### Null

**null** : variable안에 어떤것이 **없다**는 것을 **확실히 하기** 위해!! 사용 / 비어있어용!

### undefined

variable이 메모리에 만들어졌지만(컴퓨터가 variable에 대해서 인지하고있음), 정의되지 않음(값이 없음)

```;
let hello;
console.log(hello); -> undefiend
// 값이 없지만 전혀 없는건 아님.

let hello = null;
console.log(hello) -> null
```

## Arrays

#### 목적 : 하나의 variable 안에 데이터 list를 가지는것!!!

데이터 정리방법~

- [ ]: array를 만들기 위한 기호 / 각각의 항목은 ','로 분리되어야 한다.
- number / string / boolean / null / undefined 모두 사용가능!
- array 안의 데이터에 접근하고싶다면 : **variable**의 이름을 적어주고 **[원하는항목의번호]**를 적어준다.
  컴퓨터는 0부터 세기때문에 0,1,2,3,4,,...으로 진행 (0이 첫번째)
  ex) 사용자가 할일목록을 만들때 사용할 수 있다.

```javascript
const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];

const nonSense = [1, 2, "hello", false, null, true, undefined, "MIINII"];

// console.log(daysOfWeek[n]); 정렬중 n번째 항목을 불러오는것

// Get Item from Array : array에서 item 받아오기
console.log(daysOfWeek); // result : "mon", "tue", "wed", "thu", "fri", "sat"

// Add one more day to the array: array 안에 요일 더 추가하기
daysOfWeek.push("sun");

console.log(daysOfWeek); // result : result : "mon", "tue", "wed", "thu", "fri", "sat", "sun"
```

list는 모든 값이 같은 의미를 갖는다

## Objects

많은 variable을 만들어야하는 방식보다 더 나은것이 필요!! ㅠㅠ 그래서 **objects**를 만들어봐야함

##### object는 많은 특성을 가질 수 있음.

###### !! how to make

- const / let 변수명 = { }
- { } 안에 property(속성) 작성
- object안에선 ' : '사용
- ' , ' 로 property 구분
- console.log(variable.property);
  (= **console** 은 **object**라는 뜻이고 그 안의 어딘가에는 log가 있다.)

```javascript
const variable = {
  property: "propertyValue1",
  property2: "propertyValue2",
  property3: "propertyValue3",
};

console.log(variable);
console.log(variable.property2);
```

```javascript
const player = {
  name: "MIINII",
  points: 100,
  brave: true,
};

console.log(player);
player.brave = false;
console.log(player); // brave의 값이 false로 변경

// player.name
console.log(player.name);
console.log(player["name"]);
```

**const**ant _전체를 하나의 값으로 업데이트_(수정)하는건 불가능 하지만 **\*object 안의** 무언가를 수정\*하는것은 가능!!

```javascript
const player = {
  name: "miinii",
  points: 10,
  brave: true,
};

console.log(player);
player = false; // 불가능
player.brave = false; // 가능
console.log(player);
```

원한다면 어떤 속성(property)도 **추가** 가능!!

```javascript
const player = {
  name: "miinii",
  points: 10,
  brave: true,
};

console.log(player);
player.lastName = "SHIN";
console.log(player);
```

<!--21.10.21-->

---

## function

#### 계속 반복해서 사용할 수 있는 코드조각!!

어떤 코드를 캡슐화해서 여러번 실행할수 있게 해줌...!

##### how to make

- function 이름
- ( ) 다음에 { }*(=코드블럭)*을 넣는다
- 코드블럭안에 작성하는것이 함수명을 쓸때마다 실행!
- ()가 function을 실행시키는것!! <function안에서 data를 받는 방법>
- function 함수명(파라미터){ }

```javascript
function sayHello() {
  console.log("hello!");
}

sayHello();
sayHello();
sayHello();
sayHello();
```

X 이름을 바꾸고 싶다면 **인수(argument)**라는것을 보내야한다.

- **인수(argument)** : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법!!

```javascript
function sayHello() {
  console.log("Hello my name is X");
}
```

**data를 받는방법** : ( ) 안에 데이터를 추가

```javascript
function sayHello(nameOfPerson, age) {
  console.log(nameOfPerson, age);
}

sayHello("미니", 28);
sayHello("샤", 28);
```

```javascript
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm" + age);
}

sayHello("미니", 28);
sayHello("샤", 28);
```

**계산기** 만들어보깅

```javascript
function plus(a, b) {
  console.log(a + b);
}

plus(8, 30);

// NaN ( Not a Number)
```

```javascript
function sayHello() {}

const player = {
  name: "miinii",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you");
  },
};

//
console.log(player.name);
player.sayHello("miinii"); // 우리만의 object와 function(= array.push)
```

## RECAP

#### how to variable

```javascript
const a = 5;
let isMiiniiHandsome = false; //업데이트 가능한 let

isMiiniiHandsome = true;
// var은 절대 사용하지 말것!
```

#### array

```javascript
const days = [1, 2, 3, false, null, undefined, "text"];

const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy); //"potato", "tomato", "pizza"
toBuy[1] = "mushroom";
console.log(toBuy); // "potato", "mushroom", "pizza"

toBuy.push("meat");
consolelog(toBuy); // "potato", "mushroom", "pizza", "meat"
```

#### Object

```javascript
const player = {
  name: "sapin",
  age: "120",
};

console.log(player);
player.name = "Nuit";
console.lg(player);
player.hometown = "paris";
console.log(player, console);
```

#### function

##### function안에서 데이터를 받는방법

```javascript
function plus(hershey, charlie) {
  // function 밖에 data를 넣을 수 있게 하는것이 훨씬 낫다~!
  console.log(2 + 2);
}

// function 안에서 data를 받는 방법 = ()안에 무언가를 적는것!

plus();
```

##### 하나의 데이터만 받구싶다면...?

```javascript
function minusFive(recipe) {
  console.log(recipe - 5);
}

minusFive(5, 10, 12, 35, 5, 6, 14, 6); // -> 0(여러개의 argument를 보내더라도 ㄱㅊ)
// 여러개의 argument를 받을 준비가 되지않앗음 / 이 function은 오직 첫번째 argument만 받아서...
```

### 귀여운 계산기 만들어보기

```javascript
const caculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};

caculator.add(3, 5);
caculator.minus(10, 5);
caculator.divide(20, 2);
caculator.powerOf(2, 3);

console.log(caculator.plus(2, 3)); // -> undefined
// function은 나를 위해 뭐를해주는것
```

function안에서 console.log좋지만 그만쓰쟈..왜냐하믄
**_<u>function 밖에서도 결과값을 얻거나, 무언가를 변경 또는 data를 받아서 사용해야하기 때문에...</u>_**

그래서!

## Returns

- 무언가를 return을 하면 계산을 담당하는 function의 코드는 그 function이 return하는 값과 같아진다.
  (= function안에 return을 실행하면 function을 실행할 때 function 밖에있는 실행값을 대체해준다.
  이것은 function이 function의 밖과 소통하는 방법이다. / **function 외부에서 value를 제공받는 것.**)

- return을 하면 function은 작동을 멎추고 결과값을 return하고 끝난다.
  (= function안에서 return과 추가작업을 입력하면 return만 작업하고 추가 수행은 이뤄지지 않는다. 만약 return 앞에 기타작업이 있다면 이 작업은 수행된다. **즉, return"까지만" 수행된다!**)

```javascript
const age = 30;
function caculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = caculateKrAge(age);

console.log(krAge);

// 어떤 작업을 처리하고 그 결과를 return하기 위해 function 사용
// 무언가를 return하면 계산을 담당하는 function의 코드(caculateKrAge(age))는 그 function이 return하는 값과 같아진다.
```

```javascript
const age = 30;
function caculateKrAge(ageOfForeigner) {
  ageOfForeigner + 2;
  return "hello";
}

const krAge = caculateKrAge(age); // caculateKrAge(age)는 function의 return값
// krAge는 caculateKrAge의 반환값

console.log(krAge); // => "hello"
```

```javascript
const caculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};

caculator.add(3, 5);
caculator.minus(10, 5);
caculator.divide(20, 2);
caculator.powerOf(2, 3);

console.log(caculator.plus(2, 3));
```

```javascript
const caculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  powerOf: function (a, b) {
    return a ** b;
  },
};

const plusResult = caculator.add(2, 3);
const minusResult = caculator.minus(plusResult, 10);
const timeResult = caculator.times(10, minusResult);
const divideResult = caculator.divide(timeResult, plusResult);
const powerOfResult = caculator.powerOf(divideResult, minusResult);
```

<!-- 21. 10. 27-->

---

####

## Conditionals(조건문)

뭔가를 확인해야할때 대부분 사용..(로그인등)

#### 타입 변환

```javascript
// 음주측정기

// prompt는 사용자에게 창을 띄울 수 있도록 해줌
const age = prompt("How old are you");

// console.log(typeof age); -> string
console.log(typeof "15", typeof parseInt("15")); // string number
console.log(myAge, parseInt(myAge)); // string: 15, number: 15로 나옴
// (= string이면 숫자와 크기를 비교할수 없음 / 입력한 값이 숫자가 아닐때 판단할수 있음. )

const age = parseInt(prompt("How old are you"));
```

prompt는 2개의 argument를 받음(문자(message), default) / 너무 오래 되어서 **잘사용하지 않고** 구식임

_typeof_ variable : string인지 number인지 그외 특성을 알 수 있음. -> parseInt(); : string을 number로 바꿔줌

**_parseInt( );_** -> number만 사용 가능 "lalala" 사용 불가 -> 사용시 **_NaN_**이 뜹니다

#### isNaN

무언가가 NaN인지 판별하는 것 / 이 function은 boolean으로 알려줍니다.(= **boolean을 return(반환)한다.!**)

```javascript
const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age)); // 숫자 입력시 false가 반환 : number가 아닌것(NaN)이 아니란뜻(=숫자)

// condition자리에는 boolean이 들어가야함.
/* if(condition){
  /// condition === true : 조건이 참일때 실행하는 코드
} else {
  // condition === false : 조건이 거짓일떄 실행하는 코드
} */
```

condition자리에는 boolean으로 판별이 가능해야한다.

```javascript
if (isNaN(age)) {
  console.log("Please write a number");
} else {
  console.log("Thank you for writing your age");
}
```

#### 조건이 여러개일떄!

else는 선택적 사항 / _else if_ 로 조건을 계속 추가 가능

```javascript
if (isNaN(age)) {
  console.log("Please write a number"); // true
} else if (age < 18) {
  // false일때 이 조건을 확인
  console.log("You are too young."); // <18이 true 이면 실행
} else if (age >= 18 && age <= 50) {
  // 두가지조건(>=18, <=50)이 모두 true(=true!)
  console.log("You cant drink :/");
} else {
  console.log("You can drink🍻"); // < 18이 false이면 실행
}
```

#### AND operator

**&&(AND)** : javascript에게 *두가지 조건 모두 true*여야한다.

- true + true : true!
- true + false : false
- false + true : false

#### OR operator

**||(OR)** : 둘 중 *하나만 true*인지 확인

- false + true : true
- true + false : true
- true + true : true
- false + false : false

---

#### RECAP

```javascript
if (isNaN(myAge) || myAge < 0) {
  console.log("Please write a real positive number"); // true
} else if (myAge < 18) {
  // false일때 이 조건을 확인
  console.log("You are too young."); // <18이 true 이면 실행
} else if (myAge >= 18 && myAge <= 50) {
  // < 18이 false이면 실행
  console.log("You can drink🍻");
} else if (myAge > 50 && myAge <= 80) {
  console.log("You should exercise😥");
} else if (myAge === 100) {
  console.log("WOW you are wise");
} else if (myAge > 80) {
  console.log("You can do whatever you want.");
}
```

= 한개의 value를 할당
== 값만 비교
=== 값과 유형을 비교 (**RECOMMEND!**)
!== 같지 않음을 확인

```javascript
if (isNaN(myAge) || myAge < 0) {
  console.log("Please write a real positive number"); // true
} else if (myAge < 18) {
  // false일때 이 조건을 확인
  console.log("You are too young."); // <18이 true 이면 실행
} else if (myAge >= 18 && myAge <= 50) {
  // < 18이 false이면 실행
  console.log("You can drink🍻");
} else if (myAge > 50 && myAge <= 80) {
  console.log("You should exercise😥");
} else if (myAge > 80) {
  console.log("You can do whatever you want");
} else if (myAge === 100) {
  console.log("wow you are wise");
}
```

두개의 else if 는 실행할수 없다..무족권 하나만

#### RECAP

```javascript
if ((a && b) || (c && d) || x || w) {
  // true || false || false
  // 실행가능하다!
}
```

## Document Object

#### \* JS는 HTML에 접근하고 읽을 수 있게 설정되어 있다.

#### \* (= js를 통해 html를 바꿀 수도 있다. document.title = "HO";)

#### \* 모든 것들은 document로부터 시작해. web site를 의미하기 때문.

console에 document를 입력하면 작성한 HTML을 가져올 수 있다.

**document** : 우리가 접근할 수 있는 HTML을 가리키는 객체 / 브라우저에 이미 존재하는 object

JaㄴvaScript에서 HTML document 객체로 부터 title을 가져올 수 있다.(document.title)
ex) documen.body

## \* HTML in JavaScript

#### HTML에서 항목들을 가지고 와서, JavaScript를 통해 항목들을 변경할 예정...!

Javascript로 정보를 가져올 수 있는 방법 : document 객체와, element를 가져오는 수많은 함수들을 이용.

```javascript
// getElementById는 string을 전달 받는 함수

const tilte = document.getElementById("blah");

console.dir(tilte); // dir : element를 더 자세히 보여줌

tilte.innerText = "Got you!!";

console.log(blah.id);
console.log(blah.calssName);
```

**_getElementById_** : html에서 id를 통해 element를 찾아줄거양~

### Searching For Elements

```javascript
const hellos = document.getElementsByClassName("hello");

console.log(hellos);
```

**_getElementsByClassName_** : 많은 element를 한번에 가지고 와야할때 사용 / **array를 가져다줌**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Momentum</title>
  </head>

  <body>
    <div class="hello">
      <h1>Grab Me 1!</h1>
    </div>
    <div class="hello">
      <h1>Grab Me 2!</h1>
    </div>
    <div class="hello">
      <h1>Grab Me 3!</h1>
    </div>

    <script src="app.js"></script>
  </body>
</html>
```

```javascript
const title = document.querySelector(".hello h1");
console.log(title); // <h1>Grab Me 1!</h1>

const title = document.quer;
```

> **_querySelector_** : element를 CSS방식으로 검색할 수 있다. (= hello란 class 내부에 있는 h1을 가지고 올 수 있다.)

- **_getElementById_** : html에서 id를 통해 element를 찾아줄거양~
- **_getElementsByClassName_** : JavaScript에서 우리가 ClassName을 넘겨준다는 것을 알기 때문 / 많은 element를 한번에 가지고 와야할때 사용 / **array를 가져다줌**
- **_getElementsByTagName_** : tag가 들어있는 모든 **array를 가져와줌** / object자체가 아님
- **_querySelector_**(.hello h1) : **CSS slector를 사용하여 검색 가능** / hello가 ClassName이라는 것과 그 안의 h1을 명시해줘야한다.(elements를 검색가능) / **첫번째 element만**을 가져다줌(= 하나의 element만 반환)
- **_querySelecorAll_** : selector 안의 조건에 부합하는 **모든 element**를 가져와줌

```javascript
const title = document.querySelector("#hello");
const title = document.getElementsById("hello");

// 둘이 같은 뜻
```

---

### Events

console.dir("something"); 햇을때 console창에 on---으로 시작하는것들은 보통 Event입니다.

![image-20211117000319081](C:\Users\순대\AppData\Roaming\Typora\typora-user-images\image-20211117000319081.png)

h1 object 내부에 있는 object : element의 style을 볼수 있는데 javascript 형식으로 작성되어 있음.

##### addEventListener : event를 listen

```javascript
const title = document.querySelector(".hello h1");

function handleTitleclick() {
  console.log("title was click");
  title.style.color = "blue";
}

// title.addEventListener("이벤트의 종류 listen", 동작하는function);
title.addEventListener("click", handleTitleclick);
```

**_handleTitleClick 다음 ()사용 하면 안됨_**.
(= javascript에 function만 넘겨주고 *유저가 click 할 경우*에 **javscript가 실행버튼을 대신 눌러주길** 바라는것이기 때문에 / 함수에서 () 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는 거임)
