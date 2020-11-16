---
title: "하옹의 자바스크립트 간편식 - DOM"
draft: true
date: 2020-11-15
path: "/javascript/DOM"
category: "javascript"
---

## DOM이란 무엇인가?

MDN에서는 DOM을 이렇게 정의하고 있다.

> 문서 객체 모델(Document Object Model)은 HTML, XML 문서의 **프로그래밍 인터페이스**이다.

이 한 문장으로 DOM이 무엇인지 알 수 있는데, 여기서 프로그래밍 인터페이스라는 것이 내포하고있는 내용이 깊기 때문이다.

그럼 프로그래밍 인터페이스란 무엇일까?

프로그래밍 인터페이스는 우리가 흔히 말하는 API와 같다고 보면 된다.
API는 (Application programming interface)로 소프트웨어 간의 교류를 가능하게 해주는 표면같은 것 이라고 생각하면 되는데, 프로그램에서 어떤 다른 프로그램을 사용하고 싶을 때 이 API를 사용하는 것이라고 보면 된다.

따라서 이 **DOM이라는 인터페이스(API)를 사용하면 HTML 문서를 우리가 조작할 수 있다.**



**아래와 같이 만들어진 html 문서를 DOM을 이용해 조작할 수 있다.**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>제목</h1>
    <h2>소제목</h2>
    <p>내용</p>
    <ul>
      <li>리스트1</li>
      <li>리스트2</li>
      <li>리스트3</li>
      <li>리스트4</li>
      <li>리스트5</li>
    </ul>
  </body>
</html>
```



**이러한 DOM은 JavaScript 언어의 일부는 아니다.**

우리가 주로 웹 페이지를 다루는데 **JavaScript 프로그래밍 언어를 통해 DOM이라는(HTML 페이지를 조작하는 )API를 사용할 뿐**이지, 파이썬과 같은 다른 프로그래밍 언어로도 DOM을 충분히 사용할 수 있다.

브라우저 자체에 WEB API가 내장되어 있고, 이 WEB API내부에 DOM이 내장되어있다고 보면 된다.



## DOM Node Tree

DOM은 Tree구조로 이루어져있다. 이 Tree 구조를 

> Tree구조는 Node들로 구성된다.

<<<<<<< HEAD
<<<<<<< HEAD
<img src="https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/904/2234.png" alt="img" style="zoom:80%;" />

Node 객체로부터 각 Node들에 대해 상속으로 이루어져있으며,
자식 Node는 부모 Node들의 특성을 그대로 가지고 있다.



DOM Tree를 구성하는 대표적 Node들은 다음과 같다.

1. Document Node
2. Element Node
3. Attribute Node
4. Text Node



### 1. Document Node

Document Node는 DOM의 가장 최상위 Node로 모든 Node들의 부모를 쭉 따라 올라가면 이 Document Node가 종착지일 것이다.

반대로 모든 Node들은 이 Document Node의 자식.

DOM에 접근하기위해서는 무조건 최상위 Node인 이 Document Node를 통할수 밖에 없다.

HTML 문서 그 자체를 가리킨다고 보면 된다.



브라우저 개발자툴 콘솔에 다음과 같이 입력해보자.

```js
dir(document);
```

<img src=".\하옹의-자바스크립트-간편식---DOM_img1.jpg" alt="image-20201115233754845" style="zoom:67%;" />

### 2. Element Node

Element Node는 HTML의 요소. 즉, HTML의 각 Tag들을 가리킨다고 보면 된다.

HTML 태그들의 구조화된 부모 자식 관계를 그대로 따라간다.

그리고 모든 요소는 **HTMLElement** 객체가 상속되어 있어 **HTMLElement의 특성을 모두 포함**하고 있다.

```js
const bodyElement = document.body; // body 태그 선택
const someElement = document.getElementById('js-id'); // js-id의 id값을 같는 요소 선택
const divElements = bodyElement.querySelector('div'); // css 선택자로 div태그 요소 선택
```

우리는 이 Element Node를 통해 HTML Tag정보를 참조, 수정할 수 있다.

```js
const createdDivElement = document.createNode('div'); // div 태그요소 생성
createdDivElement.innerHTML = '<h1>this is title</h1>'; // div 태그요소의 html내용 변경
```



### 3. Attribute Node

Attribute Node는 HTML의 Tag가 가지고있는 Attribute와 같다고 보면 된다.

당연히 Attribute Node는 Element Node를 통해 접근가능하며,
우리는 이 Attribute Node를 통해 HTML Tag의 Attribute를 수정할 수 있다.

```js
const createdDivElement = document.createNode('div'); // div 태그요소 생성

createdDivElement.className = 'title-area'; // class attribute 수정
createdDivElement.style.backgroundColor = 'red'; // style attribute 수정
```



### 4. Text Node

Text Node는 HTML의 텍스트를 가리킨다. 텍스트는 HTML내에서도 가장 최하위 요소이고, DOM에서도 마찬가지이다.

```js
const createdDivElement = document.createNode('div');

createdDivElement.textContext = 'Create Div Tag using by DOM';

document.body.appendChild(createdDivElement); // body요소에 생성한 div태그 추가.
```



## DOM Element 선택

DOM Element Node선택은 최상위 Tree Node인 Document Node를 통해 할수도,
같은 DOM Element Node를 통해 할 수도 있다.

물론 자식 Node들에대해서만 선택이 가능하다. 때문에 첫 시작은 document Node가 될 수 밖에 없다.



### 선택 방법

DOM Element를 선택하는 방법은 다음과 같다.

1. document.getElementById('id')
2. document.getElementsByClassName('className')
3. document.getElementsByTagName('tagName')
4. document.querySelector('cssSelector')
5. document.querySelectorAll('cssSelector')



네이밍에서 알 수 있듯이, 1,2,3번은 <u>get element</u>가 들어가있기 때문에 `Element Node`를 가져온다는 명확한 뜻에 더해서 `id`, `class name`, `tag name`으로 가져오냐 마냐의 차이가 있다.

여기서 Elements 와 같이 복수형으로 되어있다면 이건 `Element Node`를 복수 선택 할 수 있다는 것.

4, 5번은 css 선택자를 통해 가져올 수 있는 방법으로, 4번은 하나 5번은 여러개의 `Element Node`를 가져올 수 있다.

참고로 1번을 제외하고 모두 document가 아닌 `Element Node(HTMLElement)`에서도 사용가능하다.
(1번은 id가 페이지내에 단 하나밖에 없기 때문)

```js
// 1개만 가져오는 방법
const elementGottenById = document.getElementById('id name');
const elementQuerySelector = document.querySelector('div.title-area');
const childElementQuerySelector = elementQuerySelector.querySelector('h1.title');

// 1개 이상의 유사배열형태로 가져오는 방법
const elementsGottenByClassName = document.getElementsByClassName('class name');
const childElementsGottenByClassName = elementsGottenByClassName.getElementsByClassName('child class');

const elementsGottenByTagName = document.getElementsByTagName('tag name');
const childElementsGottenByTagName = elementsGottenByTagName.getElementsByClassName('child tag');

const elementsQuerySelectorAll = document.querySelectorAll('.button');
const childElementsQuerySelectorAll = elementsQuerySelectorAll.querySelectorAll('.name');
```



정답은 없으나 **주로 querySelector()와 querySelectorAll()이 쓰인다.**




### 선택 결과 (return value)

`Element Node`를 가져오는  방법에 따라 return되는 값의 형태는 다르다.

당연히 `Element Node` 1개만을 가져오는 방법과 여러개를 가져오는 방법으로 나뉜다.

#### HTMLElement (결과 1개)

`Element Node`를 1개만 가져오는 방법은 다음과 같다.

- document.getElementById()
- document.querySelector()

해당 방법들로 `Element Node` 를 가져왔을 경우에 리턴값은 `HTMLElement`객체(인스턴스)이다.

`HTMLElement`객체의 특성을 그대로 사용할 수 있고 다음과 같이 확인할 수 있다.

```js
const wrapperElement = document.querySelector('div');
const buttonElement = document.getElementById('button');
const listElement = document.getElementById('list');
const anchorElement = document.querySelector('a.anchor');
const inputElement = document.querySelector('input.input-text');

// 각 Element Node들의 상속받은 객체를 알기위해 constructor.name 출력
console.log(wrapperElement.constructor.name); // HTMLDivElement
console.log(buttonElement.constructor.name); // HTMLButtonElement
console.log(listElement.constructor.name); // HTMLLIElement
console.log(anchorElement.constructor.name); // HTMLAnchorElement
console.log(inputElement.constructor.name); // HTMLInputElement
```

부모 객체 출력 결과는 각각 다른데, 그렇다고 모든 `Element Node`들이 다르지는 않다.

바로 각 HTML Tag에 해당되는 내용마다 Tag의 Attribute와 특성 등이 다르기 때문에 가장 기본이 되는 **`HTMLElement`객체를 상속받아 각 Tag의 특성과 Attribute를 속성으로 갖는 객체**를 만든 것.

<img src="https://mdn.mozillademos.org/files/16596/html-dom-hierarchy.svg" alt="Hierarchy of interfaces for HTML elements" style="zoom:80%;" />

따라서 모두 `HTMLElement`이고,
상속받는 객체들의 속성들을 모두 사용할 수 있다.

> **EventTarget은 각 Node별로 Event를 처리를 하기위해 만든 최상위 Node**
> addEventListener(), removeEventListener() 등의 메서드가 있다.



##### 가져오지 못한 경우

그리고 해당되는 `Element Node` 가 없다면 결과는 undefined가 아닌 **null**로 떨어진다.

```js
const someElement = document.getElementById('id');
console.log(someElement); // null
```



#### HTMLCollection, NodeList (복수 - 1개이상)

위에서 살펴본 복수개(1개이상)의 `Element Node`를 가져오는 방법에서 

- document.getElementsByClassName()    ->    `HTMLCollection`
- document.getElementsByTagName()    ->    `HTMLCollection`
- document.querySelectorAll()    ->    `NodeList`

들과 같은 방법으로 가져올 경우, **유사배열 형태 (Array Like)** 의 값으로 떨어진다.

그 중 `ParentNode` 믹스인 기반인 `querySelectorAll()`을 제외한 getElements계열은
`HTMLCollection` 형태로 값이 떨어지고 `querySelectorAll()`은 `NodeList`의 형태로 떨어지게 된다.

```js
const listElements = document.getElementsByTagName('li');
const activeElements = document.getElementsByClassName('active');
const wrapperElements = document.querySelectorAll('div.wrapper');

// 각 Element Node들의 상속받은 객체를 알기위해 constructor.name 출력
console.log(listElements.constructor.name); // HTMLCollection
console.log(activeElements.constructor.name); // HTMLCollection
console.log(wrapperElements.constructor.name); // NodeList
```

다음과 같이 모두 복수형을 가져오는 결과는  **유사 배열** 형태의 `HTMLCollection` , `NodeList`의 형태로 떨어지는데, 이 **유사 배열** 에 담긴 값들은 전부 앞에서 살펴본 `HTMLElement`이다.

```js
const wrapperElements = document.querySelectorAll('div.wrapper');

console.log(wrapperElements[0].constructor.name); // HTMLDivElement
```

결국 `HTMLCollection` 이나 `NodeList` 이나 가져오는 **유사 배열** 형태의 차이만 있을뿐, 그 속인 내부는 `HTMLElement` 를 담고있는건 똑같다.



##### HTMLCollection VS NodeList

`HTMLCollection`과 `NodeList`의 차이는 **live** 한 특성이냐, **static** 한 특성이냐의 차이가 있다.

- `HTMLCollection` : **live** data
- `NodeList` : **static** data



이러한 특성들이 무엇인지는 소스로 비교해보자.

```html
<body>
    <ul class="list">
        <li class="item">First Item</li>
        <li class="item">Second Item</li>
        <li class="item">Third Item</li>
    </ul>
</body>
```

다음과 같은 html 파일이 있다고 할 때,

```js
const itemElementsHTMLCollection = document.getElementsByClassName('item');
const itemElementsNodeList = document.querySelector('.item');

console.log(itemElementsHTMLCollection);
// HTMLCollection { 0: li.item, 1: li.item, 2: li.item, length: 3 }

console.log(itemElementsNodeList);
// NodeList(3) [ li.item, li.item, li.item ]
```

각 결과는 다음과 같다. 이미 여기서 부터 `HTMLCollection`과 `NodeList`의 차이가 보이는데,

class name에 맞는 요소는 모두 알맞게 가지고 왔지만, **데이터 구조 자체에서 큰 차이**가 보인다.



이렇게 가져온 **두 개의 데이터구조를 그대로 두고**,  **새로운 `<li>` 의 `Element Node`를 추가**하고 두 데이터 구조를 출력, 비교해보자.

```js
const list = document.querySelector('ul.list');

// HTMLCollection과 NodeList 데이터를 가져오자.
const itemElementsHTMLCollection = document.getElementsByClassName('item');
const itemElementsNodeList = document.querySelector('.item');

// 여기서 새로운 element node 추가.
list.innerHTML += '<li class="item">Fourth Item</li>';

// 출력해서 비교해보자.
console.log(itemElementsHTMLCollection);
// HTMLCollection { 0: li.item, 1: li.item, 2: li.item, 3: li.item length: 4 }

console.log(itemElementsNodeList);
// NodeList(3) [ li.item, li.item, li.item ]
```

이제 차이가 보이는가? **live**한 특성을 가지고있는 `HTMLCollection`은 수정사항이 동적으로 변경사항을 감지해 자동 업데이트 되는 반면에, **static**한 특성을 가지고있는 `NodeList`는 처음에 가져온 그대로 정적으로 남아있다.

이것이 바로 **live** 데이터구조와 **static** 데이터 구조의 차이.

근데, `element.childNodes`로 가져오는 `NodeList`는 **live** 하니 `childNodes`와 `querySelectorAll()`의 `NodeList` 별 차이를 인지하고 있어야 한다.



##### 배열로 사용하기

그리고 모두 **유사 배열** 형태이기 때문에 

```js
const arrayFromHTMLCollection = Array.from(itemElementsHTMLCollection); // HTMLCollection -> 배열 전환
const arrayFromNodeList = Array.from(itemElementsNodeList); // NodeList -> 배열 전환
```

과 같이 `Array.from()` 을 통해 배열로 변환하여 **Array.prototype method**들을 사용할 수 있다.



### 자식, 부모 Node 탐색

`DOM Node`들은 DOM Tree 구조상 모두 `Node` 객체를 상속받는다.

따라서 우리는 `Node` 객체를 상속받는 모든 객체들에 대하여 **`Node` 객체의 Property를 이용할 수 있는데**, 그 중 부모, 자식 `Node`에 대한 Property를 이용하면 **현재 `Node`의 부모 `Node`, 자식 `Node`를 구할 수 있다.**

부모, 자식 `Node`를 구하는 Property는 다음과 같으며 `Node`객체의 프로퍼티는 모두 read-only property이다.

> ParentNode는 Node 객체의 믹스인으로써 모든 Node 인스턴스가 공통으로 가지고있다고 보면 된다. (상속객체 포함)



- Node.parentNode
  - 부모 `Node` 탐색
- Node.childNodes
  - 모든 자식 `Node` 탐색 (`NodeList` 반환 - **static**)
- Node.firstChild
  - 첫 자식 `Node` 탐색
- Node.lastChild
  - 마지막 자식 `Node` 탐색
- ParentNode.children
  - 모든 자식 Node 탐색 (`HTMLCollection` 반환 - **live**)
- Node.hasChildNodes()
  - 현재 노드가 자식을 가지고있는지 확인하는 메서드
- Node.

```js
const someElement = document.querySelector('ul.list');

const parentNode = someElement.parentNode; // 부모노드 가져오기
const childNodes = someElement.childNodes; // 자식노드 유사배열(NodeList) 가져오기
const firstChild = someElement.firstChild; // 첫번째 자식노드 가져오기
const lastChild = someElement.lastChild; // 마지막 자식노드 가져오기
const children = someElement.children; // 자식노드 유사배열(HTMLCollection) 가져오기

if (someElement.hasChildNodes()) {
    // ToDo...
}
```





#### Node.childNodes VS ParentNode.children

두개의 차이점은 반환 데이터의 데이터구조의 차이로, `NodeList`와 `HTMLCollection`의 차이가 있다.

- Node.childNodes -> `NodeList` (**static**)
- ParentNode.children -> `HTMLCollection` (**live**)

> static data와 live data의 차이는 앞서 설명하였다.

```js
const someElement = document.querySelector('ul.list');

const nodesByChildNodes = someElement.childNodes;
const nodesByChildren = someElement.children;

console.log(nodesByChildNodes.constructor.name); // NodeList
console.log(nodesByChildren.constructor.name); // HTMLCollection
```



### 형제 Node 탐색

마찬가지로 형제 `Node`들 또한 접근가능하다.

- Node.previousSibling
- Node.nestSibling
- Node.previousElementSibling
- Node.nextElementSibling



## Element 요소 조작



## Element 요소 생성



## Element Event 추가



