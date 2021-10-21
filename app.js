
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

const player = {
  name: "MIINII",
  points: 100,
  brave : true,
};

console.log(player);
player.brave = false;
console.log(player); // brave의 값이 false로 변경

// player.name(같은 표현)
console.log(player.name);
console.log(player["name"]);


const studyScore = {
  name: "math",
  perfectScore: 100,
  yourScore: 80,
};

console.log(studyScore); // {name: "math", perfectScore: 100, yourScore: 80}
studyScore.pass = false; // 속성 추가
console.log(studyScore); // {name: "math", perfectScore: 100, yourScore: 80, pass: false}