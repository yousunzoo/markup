// b_10_setFunction.js

var a = 10;
var b = 0;
console.log(a);

setTimeout(function(){
  a += 100;
  console.log(a);
}, 2000);
// setTimeout : 일정 시간 뒤에 값이 나오도록 함, 한번 동작
// 1000 : 1초

/*
setInterval(function(){
  console.log(b);
  b += 1;
}, 500);
*/
//setInterval : 멈추게 하기 전까지 해당 시간마다 무한 반복

var go;

var startFn = function(){
  go = setInterval(function(){
       b+=1;
      console.log(b);
      }, 500);
};

// startFn();

var stopFn = function(){
  clearInterval(go);
  b = 0;
}

var exWrap = document.querySelector('.ex_wrap');
var btn = exWrap.querySelectorAll('button');
console.log(btn);

btn.forEach(function(data, idx){
  data.addEventListener('click', function(){
    (idx === 0) ? startFn() : stopFn();
  })
})