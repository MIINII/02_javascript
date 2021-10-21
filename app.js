
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