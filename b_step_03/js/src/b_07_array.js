// b_07_array.js

var arr = [];
console.log (arr);

// 무언가.메소드() -> 메소드 기능/동작 수행
// 무언가.프로퍼티 -> 확인/정의/체크/삽입


// push() : 배열의 뒤에 내용을 삽입

arr.push('a');
console.log (arr);
arr.push('b');
console.log (arr);
arr.push('coffee');
console.log (arr);
arr.push('juice');
console.log (arr);
arr.push('watch');
arr.push('smart phone');
console.log (arr);

// pop() : 배열요소의 뒷 내용 삭제
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
console.log(arr);

// unshift : 배열의 앞에 내용을 삽입
arr.unshift('other');
console.log(arr);
arr.unshift('water');
console.log(arr);
arr.push('ssd');
console.log(arr);

//shift() : 배열요소의 앞 내용 삭제
arr.shift();
console.log(arr);
arr.shift();
console.log(arr);

console.clear();
// --------------------------------------------

var ar1 = ['a','b','c','d','e','f','g','h','i'];

// splice(순서) : 해당순서부터 요소 삭제
// splice(순서, 갯수) : 해당순서부터(포함), 갯수만큼 요소 삭제
// splice(순서, 갯수, 추가(갯수만큼)) : 해당순서부터(포함), 갯수만큼 요소 삭제 한 후, 그 위치에 추가로 삽입

// ar1.splice(2);
// ar1.splice(2, 3);
ar1.splice(2,3,'ㄱ','ㄴ','ㄷ','ㄹ');
console.log(ar1);

//------------------------------------------
// 기존배열.slice(시작, 끝) : 시작 순서와 끝 순서 사이의 값을 별도로 복제하여 가져옴

var ar2 = ar1.slice(2,6);
console.log(ar1);
console.log(ar2);

console.clear();
// --------------------------------------
// 배열은 순서가 정해져있다.
// reverse() : 배열의 순서를 뒤집는 것

console.log(ar2);
ar2.reverse();
console.log(ar2);

console.clear();
//sort() : 알파벳 순, 숫자 크기 순으로 정렬
console.log(ar2);
ar2.sort();
console.log(ar2);

var fruits = ['grape','orange','apple','kiwi','watermelon']
console.log(fruits);

// fruits.sort();
fruits.sort(function(a,b){
  return (a < b) ? -1 : 1 ;
});

console.log(fruits);

console.clear();
// ----------------------------------
// 변수.split() : 변수의 내용을 기준(띄어쓰기, ., ...)에 의해 배열로 설정

var ls = '서울시 강남구 역삼동 000 16';
var lsArr = ls.split(' ');
console.log(ls);
console.log(lsArr);

var smt = '삼성, 애플, 구글, 엘지';
console.log( smt );
var smtArr = smt.split(', ');
console.log( smtArr[1] );

// -------------------------------------
// 변수.join() : 배열요소의 내용을 하나의 문자열로 반환

var nNum = ['+82','010','0000','1234'];
console.log(nNum);
// var mobile = nNum[0] + nNum[1] + nNum[2] + nNum[3];
var mobile = nNum.join(' - ');
console.log(mobile);

console.log(nNum.length);