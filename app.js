
// console.log(5 + 2);
// console.log(5 + 2);
// console.log(5 * 2);
// 여기서 숫자를 수정하구 싶다면..?

// const a = 5;
// const b = 2;
// const myName = "miinii";

// let myName = "miinii";

// console.log(a * b);
// console.log(a / b);
// console.log(a / b);
// console.log("hello" + myName);

// myName = "JeongMin"

// console.log("your new name is" + myName);

// ---------------------------------------------------------------------------

// const amIFat = true;
// let something; //
// console.log(amIFat);
// console.log(something); // result : undefined

// ---------------------------------------------------------------------------

// Array

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const nonSense = [1, 2, "hello", false, null, true, undefined, "MIINII"];
// const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek[3]); // result : thu

// Get Item from Array : array에서 item 받아오기
console.log(daysOfWeek); // result : "mon", "tue", "wed", "thu", "fri", "sat"

// Add one more day to the array: array 안에 요일 더 추가하기
daysOfWeek.push("sun");

console.log(daysOfWeek); // result : result : "mon", "tue", "wed", "thu", "fri", "sat", "sun"/

// ---------------------------------------------------------------------------

// Objects

// const playerName = "MIINII";
// const playerPoints = "13131313"
// const playerBrave = "true";
// const playerFat = "true";
 

// player.Name
// player.Points
// player.Brave
// player.Fat
// (=> 너무 많은 변수가 생김)

// const player = ["MIINII", "13131313", true, ture ]
// (=> 각각이 무슨 의미인지 몰라용)

// const player = {
//   name: "MIINII",
//   points: 100,
//   brave : true,
// };
// 
// console.log(player);
// player.brave = false;
// player.points = player.points + 90;
// console.log(player); // brave의 값이 false로 변경
// 
// // player.name(같은 표현)
// console.log(player.name);
// console.log(player["name"]);
// 
// 
// const studyScore = {
//   name: "math",
//   perfectScore: 100,
//   yourScore: 80,
// };
// 
// console.log(studyScore); // {name: "math", perfectScore: 100, yourScore: 80}
// studyScore.pass = false; // 속성 추가
// console.log(studyScore); // {name: "math", perfectScore: 100, yourScore: 80, pass: false}

// ------------------------------------------------

// function

// function sayHello() {
//   console.log("hello!");
// }

// sayHello("바보");
// sayHello("멍청이");
// sayHello("똥개");

function sayHello(nameOfPerson, age){
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age)
}

sayHello("llol", 10);
sayHello("car", 30);
sayHello("twin", 28);

function plus(a, b){
  console.log(a + b);
}

function divide(a, b){
  console.log(a / b);
}

divide(30, 30);


const player = {
  name: "miinii",
  sayHello: function(otherPersonsName){
      console.log("hello " + otherPersonsName + " nice to meet you");
  },
};

// sayHello라는 player 안의 function을 부를때 consol.log를 사용

console.log(player.name);
player.sayHello("miinii");


const man = {
  name: "sapin",
  age: "120",
};

console.log(man);
man.name = "Nuit";
console.log(man);
man.hometown = "paris";
console.log(man, console);

function evolution(hershey, charlie) {
  console.log(hershey + charlie);
}

evolution(3, 3);


function minusFive(recipe) {
  console.log(recipe -5);
}

minusFive(5, 10, 12, 35, 5, 6, 14, 6);



// 작업하구싶다면
const caculator = {
  add: function(a,b){
    return a + b;
  },
  minus: function(a,b){
    return a - b;
  },
  times: function(a,b){
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  },
  powerOf: function(a,b){
    return a ** b;
  }
};

const plusResult = caculator.add(2, 3);
const minusResult = caculator.minus(plusResult, 10);
const timeResult = caculator.times(10, minusResult);
const divideResult = caculator.divide(timeResult, plusResult);
const powerOfResult = caculator.powerOf(divideResult, minusResult);

// ----------------------------------------------------------------

// Returns

const age = 30;
function caculateKrAge(ageOfForeigner){
  return ageOfForeigner + 2;
}

const krAge = caculateKrAge(age);

console.log(krAge);

// 외국나이(ageOfForeigner)를 받아서 한국나이를 계산하구싶을뿐...
// function을 작동시키면서 console에 표시하는건 원치않음!
// 함수는 어떤일을 수행하고 그 결과를 알려주는것!
// 결과를 코드로 받고싶음!

/*
const age = 30;
function caculateKrAge(30){
  return 30 + 2;
}

const krAge = 30;

console.log(krAge); => 32
*/

// ----------------------------------------------------------------

// Conditionals(조건문)

// prompt는 사용자에게 창을 띄울 수 있도록 해줌 / 자바스크립트의 코드실행을 일시정지
// const myAge = prompt("How old are you"); 
// const myAge = parseInt( prompt("How old are you?") );

// typeof variable : string인지 number인지 그외 특성을 알 수 있음.
// parseInt() : string을 number로 바꿔주는 함수

// console.log(isNaN(myAge));1

// condition자리에는 boolean으로 판별이 가능해야한다.

// if(isNaN(myAge) || myAge < 0){
//   console.log("Please write a real positive number") // true
// } else if (myAge < 18) { // false일때 이 조건을 확인
//   console.log("You are too young.") // <18이 true 이면 실행
// } else if (myAge >= 18 && myAge <= 50){ // < 18이 false이면 실행
//   console.log("You can drink🍻")
// } else if (myAge > 50 && myAge <= 80) {
//   console.log("You should exercise😥")
// } else if (myAge === 100) {
//   console.log("WOW you are wise")
// } else if (myAge > 80) {
//   console.log("You can do whatever you want.")
// };

// -------------------------------------

// HTML in JavaScript

// const h1 = document.querySelector("div.hello:first-child h1");
// querySelector는 첫번째 element를 가져옴
// h1.innerText = "hello"; // javascript object 속 property를 변경

// function handleTitleclick() {
//  // h1.style.color 가 blue라면 tomato로 바꿔주세요 / 아니라면 blue로 변경해주세요
//   if(h1.style.color === "blue"){
//    h1.style.color = "tomato";
//  } else {
//    h1.style.color = "blue";
//  }
// };

// function handleTitleclick() {
//   const currentColor = h1.style.color;
//   let newColor; // let 값 변경 가능
//   // 만약 currentColor가 blue라면, newColor는 tomato로 변경
//    if(currentColor === "blue"){ // true -> tomato | false -> blue
//     newColor = "tomato"; // true일떄
//   } else {
//     newColor = "blue"; // false일때
//   }
//   h1.style.color = newColor;
//  };

// h1.addEventListener("click", handleTitleclick);

// ---------------------------------------------------------------

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
	h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);