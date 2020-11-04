---
title: "하옹의 자바스크립트 간편식 - Type"
draft: false
date: 2020-11-02
path: "/javascript/type"
category: "javascript"
---


\* 이 글은 Vanilla Coding Prep 코스 수강 후 정리하는 내용입니다.

## 자료형 (Type)이란?

자료형은 위키 백과에서는 다음과 같이 표현하고 있다.

> **자료형**(資料形) 또는 **데이터 타입**(data type)은 [컴퓨터 과학](https://ko.wikipedia.org/wiki/컴퓨터_과학)과 [프로그래밍 언어](https://ko.wikipedia.org/wiki/프로그래밍_언어)에서 실수치, 정수, 불린 자료형 따위의 여러 종류의 데이터를 식별하는 분류로서, 더 나아가 해당 자료형에 대한 가능한 값, 해당 자료형에서 수행을 마칠 수 있는 명령들, 데이터의 의미, 해당 자료형의 값을 저장하는 방식을 결정한다.



프로그래밍은 기본적으로 다양한 값들을 다뤄야 하는데, 프로그래밍을 하면 이 다양한 값들을 이용, 변형, 조합, 계산과 같은 다양한 행위를 통해 새로운 값을 구하거나 프로그램에 어떠한 행위를 하게 할 수 있다.

자료형은 한마디로 우리가 프로그래밍 하는데 있어서 필요한 **값들의 종류를 분류, 저장**하는데 쓰이고 **이를 활용할 수 있게끔 해주는 것**.



## 자바스크립트 자료형 (Type)의 종류는?

자바스크립트의 자료형의 종류는 총 7가지가 있다.

하지만 기본적으로, 자바스크립트의 모든 것들은 객체로 이루어져있고, 객체로 이루어지기 때문에 아래 타입들 또한 객체로 이루어진다.

- String Type 
- Number Type
- Boolean
- Undefined
- Null
- Object
- Symbol



## 1. String Type

String Type은 문자열로써 텍스트 데이터를 나타낸다.
다른 언어와는 다르게 16bit의 [유니코드 문자(UTF-16)](https://ko.wikipedia.org/wiki/UTF-16)의 집합.

> 유니코드 문자의 집합이기 때문에 한글, 영어, 한자 등의 다양한 언어 표기를 할 수 있다.



### 문자열 리터럴 (String Literal)

string 문자의 생성은 작은따옴표 `'` 혹은 쌍 따옴표 `"` 안에 텍스트를 넣어 생성한다.

> 다음은 string 자료형 생성을 문자열 리터럴로 생성하는 방법이다.

```js
var stringLiteral = '문자열';
var stringLiteral = 'String';
var stringLiteral = "文字列";
var stringLiteral = "もじれつ";
```



### 템플릿 리터럴 (Template Literal)

ES2015 부터, Javascript에서는 Template 리터럴을 지원한다.
문자열 템플릿은 벡틱 `` ` 안에 텍스트, 변수를 넣어서 텍스트를 생성한다.

> 다음은 string 자료형 생성을 Template 리터럴로 생성하는 방법이다.

```js
var templateLiteral = `文字列`;
var templateLiteral = `문자열을 한자로 하면 ${templateLiteral}`; // 문자열을 한자로 하면 文字列
```

위와 같이 변수를 표기할 때에는 `${변수명}` 과 같이 표기한다.



### String Object 이용

String Object를 사용해서 문자열을 만드는 방법은 일반적인 방법은 아니다.

```js
var stringObject = new String("문자열");

console.log(typeof stringObject); // "object"
console.log(typeof stringLiteral); // "string"
console.log(typeof templateLiteral); // "string"
```

문자열 리터럴과 템플릿 리터럴의 `typeof` 결과는 `"string"`이 되나,
String Object를 이용해서 만든 변수의 `typeof` 결과는 `"object"`이다.

내부적으로는 위의 문자열 리터럴과 템플릿 리터럴의 작동이 String Object로 생성이 일어나지만,
생성 결과는 이와같이 다르다는 차이점이 있다.



### Primitive Type

문자열 타입은 Javascript 타입 종류중 하나인 `원시 타입 (Primitive Type)`이다. 

Primitive Type의 내용은 [여기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)를 참조하자.



### String.prototype

위 String Object로 만들어지기 때문에,

모든 문자열들은 `String.prototype`을 상속받아서 `String.prototype`의 속성값과 메서드 들을 사용할 수 있다.

속성은 대표적으로 **length**가 있으며,

메서드는 거의 대다수가 중요하기 때문에, 디테일한 내용은 [공식문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)를 참조하자.



### typeof

string 타입의 값을 typeof 연산자를 하면 `"string"` 값이 나온다.

```js
var stringValue = "hello";

console.log(typeof stringValue); // "string"
```



## 2. Number Type

Number Type은 숫자를 나타낸다.

Javascript의 숫자형은 int, double, short, float 등의 정수, 실수들의 다양한 숫자형이 있는 반면에,
Number Type 하나로만 나타낸다.

이 Number Type은 64비트 부동소수점 형으로
$$
-(2^{53} - 1) \sim 2^{53} - 1
$$
의 범위를 나타낼 수 있다.

```js
var number = 10;
var number = -10;
var number = 10.1010101010;
var hex = 0x0a;
var oct = 0o12;
var binary = 0b1010;
```

위와 같이 2진수`0b`, 8진수`0o`, 16진수`0x`로 숫자값을 저장할 수도 있다.

**하지만** 저장되어져 있는 결과는 10진수(Decimal)로 저장되어져 있다.

```js
console.log(hex === oct === binary); // true
```

### 무한대 표시 (Infinity, -Infinity)

그 무엇보다 크고 작은 숫자인 무한대를 표기 할 수도 있다.

```js
var infinityNum = Infinity; // 양의 무한대
var infinityNum = -Infinity; // 음의 무한대
```

Infinity는 자바스크립트가 나타낼 수 있는 어떠한 숫자 리터럴 보다 크고 -Infinity는 어떠한 숫자 리터럴 보다 작다.

```js
console.log( Infinity > 9007199254740992 ); // true
console.log( -Infinity < -9007199254740992 ); // true
```



### NaN

숫자타입에는 Infinity 말고도 특별한 값이 있는데, 바로 NaN이다.

NaN의 의미는 **숫자가 아니다**는 것. (Not a Number)

NaN을 반환하는 연산은 다음과 같다.

- 숫자로서 읽을 수 없음
- 결과가 허수인 수학 계산식 
- 피연산자가 `NaN` 
- 정의할 수 없는 계산식
- 문자열을 포함하면서 덧셈이 아닌 계산식

```js
var number = 0 / 0; // 정의 할 수 없는 계산식
var number = parseInt("문자열123"); // 숫자로 읽을 수 없음
var number = 10 * NaN; // 피 연산자가 NaN
var number = Math.sqrt(-1); // 값이 허수
var number = "문자열" * 3; // 문자열을 포함하면서 덧셈이 아닌 계산식
```

다음과 같이 숫자로 표현할 수 없는 값일 경우에는 NaN이 된다.

#### NaN 판별

NaN을 체크하는 방법은 전역객체에 존재하는 isNaN() 메서드를 이용할 수 있다.

```js
console.log(isNaN(number)); // true
```



### Number Object

숫자 타입 또한 문자열 타입과 마찬가지로 리터럴 대신 Number Object를 통해 생성할 수 있으며,
내부적으로 Object를 통해 만들어진다.

```js
var number = new Number(10);

console.log(number === 10) // false
```



### Primitive Type

숫자 타입은 Javascript 타입 종류중 하나인 `원시 타입 (Primitive Type)`이다. 

Primitive Type의 내용은 [여기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)를 참조하자.



### Number.prototype

모든 숫자 Type은 내부적으로 Number Object로 생성이되어 Number.prototype을 상속받는다.

[Number.prototype 공식문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) 

알아둘 것은,

- Number.MAX_VALUE
- Number.MIN_VALUE
- Number.isNaN()
- Number.parseInt()

등이 있다.

#### Number.isNaN() <-> isNaN()

Number.isNaN()과 global의 isNaN() 과의 비교를 알아 둘 필요는 있다.

global의 isNaN()은 값이 NaN이거나 숫자로 변환했을 때 NaN이 되면 true를 반환하지만,

Number.isNaN()은 값이 명확하게 NaN일 경우에만 true를 반환한다.

요약하자면, **global의 isNaN은 자동 형변환이 포함되어 있다.**

```js
console.log(isNaN('NaN')); // true
console.log(Number.isNaN('NaN')); // false
console.log(Number.isNaN(NaN)); // true
```



### typeof

number 타입의 값을 typeof 하면 `"number"` 값이 나온다.

```js
var numValue = 20;
console.log(typeof 10); // "number"
console.log(typeof numValue); // "number"
console.log(typeof NaN); // "number"
```





## 3. Boolean Type

불리언 타입은 참, 거짓을 나타내는 `true`, `false` 로 나타낼 수 있다.

```js
var isSomeTrue = true;
var isSomeTrue = false;
```

### Truthy VS Falsy

Javascript에서는 Boolean 타입에 더나아간 개념으로 `Truthy`와 `Falsy`라는 개념이 있다.

이 개념은 변수의 타입이 Boolean 타입이 아니더라도, Boolean 형태의 값처럼 인식하여 if문과 같은 흐름제어에 `true` `false` 와 같이 쓰이게 된다.

- Truthy  : true로 인식되는 값
- Falsy : false로 인식되는 값



`Falsy`에 속하는 값들만 알고있으면, 그 외의 나머지는 `Truthy`이다.

#### Falsy 값

- false
- undefined
- null
- 0, -0
- NaN
- "" (빈 문자열)

햇갈리기 쉬운 값으로는 `{}` `[]` 빈 객체, 배열이 있다. 이 값들은 Truthy.



```js
var someValue = "하하하";
var nothing = "";

if (someValue) {
    console.log(someValue); // 출력
}

if (nothing) {
    console.log("값 없음"); // 출력 X
}
```





### Boolean 형변환 (!! 연산자)

Boolean은 앞서 봤던, `Truthy` `Falsy` 개념으로 형변환을 할 필요는 없지만,

보다 명확하게 나타내기 위해 `!` 연산자를 두번 사용`!!`하기도 한다.

```js
var string = "";
var num = 0;

console.log(!!string); // false
console.log(!!num); // false

var string = "string";
var num = 10;

console.log(!!string); // true
console.log(!!num); // true
```



### Primitive Type

불린 타입은 Javascript 타입 종류중 하나인 `원시 타입 (Primitive Type)`이다. 

Primitive Type의 내용은 [여기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)를 참조하자.



### typeof

Boolean 타입의 값을 typeof 하면 "boolean" 값이 나온다.

```js
console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"
```



## 4. Undefined (정의되지않음)

`undefined` 값은 **변수 선언시 자동으로 할당되는 값**으로, Undefined 타입이다.
Undefined 타입의 값은 `undefined` 하나밖에 존재하지 않는다.

```js
var undefinedVar; // undefined 자동할당
let undefinedVar; // undefined 자동할당
console.log(undefinedVar); // undefined
```



### Undefined값은 어떻게?

`undefined`는 개발자가 스스로 변수에 할당하는 값이 아니고, 주로 <u>선언은 되었지만 값을 할당하지않은 변수</u>에 접근하거나 <u>객체에 존재하지않는 속성값을 가져오려고 할 때</u> `undefined`가 반환된다.

1. **선언 되었으나 값이 할당되지 않은 변수**
2. **존재하지않는 객체의 속성(Property)에 접근**



개발자 스스로 값이 없음을 표시하고 싶을때 `undefined`를 할당하는것은 좋지못한 컨벤션. 일반적이지 않다.

값이 없다는것을 표기하고 싶다면 null 타입을 이용하도록 한다. 

```js
var emptyValue = undefined; // Bad
var emptyValue = null; // Good
```



### undefined 확인 (Falsy)

`undefined` 값인 것을 확인하려면은 `undefined`값으로 명백하게 비교 할 수도 있지만, Falsy의 특성을 이용해도 좋다.

```js
var emptyValue;

if (emptyValue === undefined) {
    // ToDo
}

// Falsy
if (emptyValue) { 
    // ToDo
}
```

아래의 Falsy 특성을 이용해서 변수에 값이 할당되어있는지, 객체에 해당 속성이 있는지 체크하는데 주로 쓰인다.

```js
var person = {
    name: "hayoung";
    age: 29
}

if (person.age) {
    console.log(`${person.name}의 나이는 ${person.age} 입니다.`);
}

if (person.age && person.age > 30) {
    console.log(`${person.name}은 아저씨입니다.`);
}
```



### 호이스팅

또한 undefined는 호이스팅과 연관이 있는데, 변수를 할당해도 호이스팅 된 변수가 값이 할당되기 전까지는 `undefined`값으로 초기화 되어 있다.

하지만 let과 const로 선언하는 변수형은 자체적으로 [TDZ]()로 보호가 되기 때문에 `ReferenceError`가 발생한다.

```js
function func() {
    console.log(someValue); // 호이스팅으로 undefined 출력
    
    var someValue = "Hello World";
}
```

호이스팅에 대한 자세한 내용은 이후 포스팅 할 호이스팅 포스트에서 알아보자.



### Primitive Type

undefined 타입은 Javascript 타입 종류중 하나인 `원시 타입 (Primitive Type)`이다. 

Primitive Type의 내용은 [여기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)를 참조하자.



### typeof

`undefined` 값을 typeof 하면 `"undefined"` 값이 나온다.

```js
let undefinedValue;
console.log(typeof undefined); // "undefined"
console.log(typeof undefinedValue); // "undefined"
```





## 5. null (값이 없음)

null 타입은 Undefined 타입과 유사하게 `null` 값 하나밖에 가지고 있지 않다.

`null`값은 일반적으로 **개발자 스스로가 변수에 값이 없음을 명시할 때** 사용한다.

```js
var someValue = null; // 나중에 처리하기 위해 선언만
```

```js
var person = {
    name: "hayoung",
    age: 29
};

// ToDo

someValue = null; // 객체 사용 후 더이상 하용하지 않아 null 처리
```



### 가비지 콜렉션

Javascript에서는 객체에 자동으로 메모리가 할당되고, [가비지 컬렉션](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science))을 이용해 **자동으로 메모리 해제**를 한다.

가비지 컬렉션 중에서도 [Mark-and-sweep](https://en.wikipedia.org/wiki/Tracing_garbage_collection) 라는 방식을 사용하는데, 이는 일정 주기로 사용하지 않는 메모리들을 한꺼번에 해제하는 방식이다.

문제는 우리가 사용하지 않는 객체를 수동으로 해제할 수 없다는 점과 사용하지 않는 메모리를 파악하는데 있다.

이를 우리가 **사용하지 않는 변수에 null값을 직접 할당**해서 가비지 컬렉션이 되도록 유도하여 Javascript의 **메모리 관리에 도움**을 줄 수 있다.

참조값을 가지고 있는 변수에 null값을 직접 할당함으로써 해당 메모리를 가리키는 참조 정보를 제거하여 누구도 참조하지 않는 메모리 영역으로 만드는 것.



### null값 판별

`null` 값 또한 `undefined`와 마찬가지로 Falsy값에 속하기 때문에 `undefined` 와 같이 Falsy 값으로 사용 할 수 있지만, 객체 참조값 변수로의 null을 명확하게 비교하려면 아래와 같이 해도 상관없다.

```js
var someObj = {
    author: "hayoung"
}
someObj = null;

if (someObj === null) {
    // ToDo
}
```



### Primitive Type

null 타입은 Javascript 타입 종류중 하나인 `원시 타입 (Primitive Type)`이다. 

Primitive Type의 내용은 [여기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)를 참조하자.



### undefined VS null

앞서 설명했듯이, undefined는 일부러 할당하지 않았는데 정의되지 않은 값을 나타내는 것이고,

null 값은 프로그래밍 중에 의도적으로 빈 값을 나타내기 위한 값이다.



####  == 연산자 [주의!]

undefined와 null에 대해 [== 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)의 사용에 주의를 가져야 한다.

`==` 연산자는 `===`연산자와 다르게 형변환을 시켜준다는 특성이 있다.

따라서 `null`과 `undefined`의 값을 비교할 때 형변환이 일어나서 둘 다 Falsy값이기 때문에 참이된다.

```js
console.log(null == undefined); // true
console.log(null === undefined); // false
```

 

#### typeof

undefined 타입인 `undefined`를 typeof 하면 undefined 타입으로 나온다.

하지만, null 타입인 `null`을 typeof 하면 **null로 나오지 않고 `object`로 나온다.**

```js
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
```



#### 숫자값 덧셈

`null`에 숫자값을 더하면 그 숫자 그대로의 값이 되지만,

`undefined`에 숫자값이 더해지면 NaN이 된다.

```js
console.log(10 + null); // 10
console.log(10 + undefined); // NaN
```



### typeof 연산자

`null` 값을 typeof 하면 **`"object"` 값이 나온다.**

`"null"` 값이 나오는 것이 아닌 `"object"` 임을 유의! 

`"object"` 값인 이유는 자바스크립트 설계상의 오류라고 한다.



## 6. Symbol

ES2015를 통해 새롭게 추가된 타입.

**충돌 위험이 없는 객체의 키 값을 만들기위해** 도입되었으며

Symbol 타입을 생성하면 변경 불가능하고 고유한 Primitive한 값이 생성된다.

식별자로의 충돌이 없는 유일하고 고유한 객체의 키값을 생성할 때 사용한다.

### Symbol의 생성

Symbol타입의 값 생성은 `Symbol()` 함수를 통해서 생성한다.

다른 Primitive Type의 값들과 다르게 `new (String, Number, Boolean)`과 같이 객체 생성이 불가능하다.

```js
let symbolValue = Symbol();
symbolValue = new Symbol(); // TypeError: Symbol is not a constructor
```



`Symbol()` 함수의 인자로 문자열 값을 전달할 수 있는데, 이는 Symbol에 대한 Description으로 사용할 수 있다.

```js
const symbolValue = Symbol("testIdentifier");

console.log(symbolValue); // Symbol(testIdentifier);
```



`Symbol()` 함수의 문자열 인자를 통해 생성 후 똑같은 문자열 인자로 Symbol 생성을 해도 똑같지 않다.

`Symbol() ` 함수는 무조건 새로운 Symbol 값을 반환하기 때문.

```js
const symbolValue = Symbol("testIdentifier");
const symbolValue2 = Symbol("testIdentifier");

console.log(symbolValue === symbolValue2); // false
console.log(symbolValue === Symbol("testIdentifier")); // false

console.log(Symbol("test") === Symbol("test")); // flase
```



### Symbol의 사용

Symbol값은 객체의 프로퍼티로 사용한다.

이 Symbol 값의 프로퍼티는 어떠한 프로퍼티와도 충돌되지 않고 오직 해당 Symbol 값으로만 접근가능하다.

주로 [] 연산자를 통해 객체 프로퍼티로 등록 및 가져온다.

```js
let authorSymbol = Symbol("author");
const obj = {};

obj[authorSymbol] = "hayoung";

console.log(obj[authorSymbol]); // hayoung
```



```js
let authorSymbol = Symbol("author");
const obj = {};

obj[authorSymbol] = "hayoung";
console.log(obj[authorSymbol]); // hayoung

authorSymbol = Symbol("author");
console.log(obj[authorSymbol]); // undefined
```



### Symbol.for

전역 Symbol 레지스트리에 공유 Symbol 값으로 생성하고 가져올 수 있다.

우리가 `Symbol.for(KEY)` 와 같이 `Symbol.for()` 메서드와 문자열 인자값으로 새로운 Symbol 값을 생성하면 전역 Symbol 레지스트리에 해당 문자열의 키로 Symbol 값이 등록이 됨과 동시에 Symbol 값을 반환한다.

추후 **다시 Symbol.for메서드에 해당 문자열 키로 해당 Symbol값을 찾을 수 있다.**

해당 문자열키에 해당하는 Symbol값이 없다면 해당 문자열 키로 하는 Symbol값을 새로 전역 Symbol 레지스트리에 등록하고 Symbol값을 반환한다.



**Module A**

```js
const authorSymbol = Symbol.for("author"); // Symbol 값 새로 생성

const ModuleA = {};

ModuleA[authorSymbol] = "hayoung";

export default ModuleA;
```

**Module B**

```js
import ModuleA from './ModuleA';

const anotherAuthorSymbol = Symbol.for("author"); // 이전에 전역 Symbol 레지스트리에 저장되어있던 Symbol값 반환.

console.log(ModuleA.anotherAuthorSymbol); // hayoung
```



### Symbol for .. in

Symbol 키 값은 for...in 반복문으로 가져올 수 없다.

```js
var obj = {};

obj[Symbol("one")] = 1;
obj["two"] = 2;
obj[Symbol("three")] = 3;
obj.four = 4;

for (let key in obj) {
    console.log(key); // "two" / "four" 출력
}
```

만약 객체에서 Symbol값을 가져오려면 `Object.getOwnPropertySymbols()`를 통해 가져올 수 있다.

```js
const symbols = Object.getOwnPropertySymbols(obj);

console.log(symbols); // [Symbol(one), Symbol(three)]

for (let i = 0; i < symbols.length ; i++) {
    console.log(symbs[i]); // Symbol(one) / Symbol(three)
}
```



### typeof

Symbol 값을 typeof 하면 `"symbol"` 값으로 나온다.

```js
console.log(typeof Symbol()); // "symbol"
console.log(typeof Symbol("author")); // "symbol"
```



## 7. Object



