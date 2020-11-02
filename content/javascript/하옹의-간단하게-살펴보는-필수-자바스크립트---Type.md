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

> **자료형**(資料形) 또는 **데이터 타입**([영어](https://ko.wikipedia.org/wiki/영어): data type)은 [컴퓨터 과학](https://ko.wikipedia.org/wiki/컴퓨터_과학)과 [프로그래밍 언어](https://ko.wikipedia.org/wiki/프로그래밍_언어)에서 실수치, 정수, 불린 자료형 따위의 여러 종류의 데이터를 식별하는 분류로서, 더 나아가 해당 자료형에 대한 가능한 값, 해당 자료형에서 수행을 마칠 수 있는 명령들, 데이터의 의미, 해당 자료형의 값을 저장하는 방식을 결정한다.



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

Privitive Type의 내용은 [여기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)를 참조하자.



### String.prototype

위 String Object로 만들어지기 때문에,

모든 문자열들은 `String.prototype`을 상속받아서 `String.prototype`의 속성값과 메서드 들을 사용할 수 있다.

속성은 대표적으로 **length**가 있으며,

메서드는 거의 대다수가 중요하기 때문에, 디테일한 내용은 [공식문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)를 참조하자.



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

Privitive Type의 내용은 [여기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)를 참조하자.



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

