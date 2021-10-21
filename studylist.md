# JavaScript

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
- null
- undefined : 정의되지 않음

console.log(dataType); =>괄호안에 있는걸 출력

### Boolean

존재하는값 : **true** or **false**
true : on(=1) / false : off(=0)

### Null

**null** : variable안에 어떤것이 **없다**는 것을 **확실히 하기** 위해!! 사용 / 비어있어용!

### undefined

variable이 메모리에 만들어졌지만(컴퓨터가 variable에 대해서 인지하고있음), 정의되지 않음(값이 없음)

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
