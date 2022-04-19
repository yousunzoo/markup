// b_06_repeat.js

//for
//for ((1)변수의 최초의 값 ; (2,5)조건 ; (4,7)변수의 값 변경 ){(3,6)수행하는 내용}

for( var i=0; i<5 ; i +=1 ){
console.log ( i ) ;
}

for (var j=2023; j > 1800; j-=1){
  console.log( j );
}

console.clear();
// ----------------------------------
// 이중 for문

var k, l; //var 는 함수 전에 미리 선언하는 것이 좋음

  for(k=2; k <= 9; k++){
    for(l=1; l <=k; l+=1){
      console.log(k + 'x' + l + '=' + (k*l));
    }
  }

console.clear();
// ------------------------------------
// for-in : 정의를 위해 만든 객체를 위한 반복문, 배열에는 적용 X
// for (변수 in 객체형식) {기능}
var drink = {
  'coffee' : '에스프레소, 카페라떼, 바닐라 마끼아또, 카페모카',
  'juice' : '포도주스, 딸기주스, 사과주스',
  'ade' : '딸기에이드, 석류에이드, 포도에이드, 레몬에이드' 
};

var o;
// for(; o<=5; o+=1){console.log(fruits[o] );}
console.log(drink);
for (o in drink) {
console.log(o, ' : ', drink[o]);
}

console.clear();
//-------------------------------
// forEach
var fruits =['apple','banana','grape','strawberry', 'kiwi' ];
// 배열.forEach( function(매개체, index){기능} );

fruits.forEach( function(data, idx){
// console.log(data, idx);
console.log( (idx +1) + ':' + data );
})

console.clear();

console.log('fruits갯수', fruits.length);
for(o=0; o< fruits.length ; o++){
  console.log(fruits[o]);
}

// data : 배열 안에 있는 각각의 데이터를 하나씩 뜯어서 보여줌
// index(idx) : 각 데이터가 배열 중 몇번째인지를 알려줌

console.clear();
// -------------------------------
// .ex_wrap -> getElementsByClassName('ex_wrap')[];
// .ex_wrap > ul -> getElementsByTagNam('ul');
// li요소를 삽입 -> innerHTML : 생성 후 추가 요소는 삽입 불가능. 기존에 있는 요소 삭제 후 새로 만들어짐 -> append 사용

// 라면 만들기 : 라면박스선택 - 라면봉지생성(creatElement) - 필요 구성을 정리 - 용기에 담기

var exWrap = document.getElementsByClassName('ex_wrap')[0];
// console.log(exWrap);
var exUl = exWrap.getElementsByTagName('ul')[0];
// console.log(exUl);
/*
var makeLi = document.createElement('li');
makeLi.innerText = fruits[0];
exUl.append(makeLi);
*/

var makeLi;
var fruitsLength = fruits.length;
var liLen=0;

for ( ; liLen < fruitsLength; liLen+=1){
  makeLi = document.createElement('li');
  makeLi.innerText = fruits[liLen];
  exUl.append(makeLi);
}
