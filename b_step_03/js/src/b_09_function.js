// b_09_function.js

// 함수
/*
  function( ){
    내용
    return : 최종 원하는 것
  }
*/

// 함수의 형태 두 가지
// 1. 함수 선언식 : fn()같이 함수에 이름을 달아준다
/* 
함수 선언만으로 동작하지는 않고 standby 상태이다.
fn()이라고 함수의 이름을 불러줄 때 동작한다.
fn()에 들어가는 변수는 선언하지 않아도 된다.
함수 전에 선언해도 내용을 불러옴 (hoisting)
*/
  console.log(fn(100));

  function fn(a){
    var result = 10 * a;
    return result;
  }

  /*
  console.log( fn(4) );
  console.log( fn(5) );
  console.log( fn(6) );
  console.log( fn(7) );
  */


// 2. 함수 표현식 : 변수에 이름을 달고, 변수에 함수 표현
// 함수 안의 매개체는 다른 함수에서 똑같은 문자를 사용하더라도 해당 함수 내에서만 작동
// hoisting 현상 X

var fn2 = function (a){
  return a * 10;
};

console.log(fn2(5));
console.clear();
// ------------------------------------
var a=10; // 전역변수 : 어디서든 사용할 수 있는 변수
var func = function(){
  a=20;
  return console.log(a = a+=10);
};

console.log(a);
func();
console.log(a);

console.clear();
// --------------------------------------

var func2 = function(){
  var b = 10; // 지역변수. 밖에서는 없는 존재 취급
  return console.log(b);
}

func2();
// console.log (b);
console.clear();
// ----------------------------------------
var btn = document.querySelector('.btn');
var btnCon = document.querySelector('.btn_content');
var arr = ['coffee', 'juice', 'fruits', 'ade'];

var button = btn.querySelectorAll('button');
// console.log(button);
button.forEach(function(data, idx){
  data.addEventListener('click', function(){
    // console.log(idx);
    btnCon.innerText = arr[idx];
  });
});