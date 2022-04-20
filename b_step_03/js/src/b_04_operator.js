// b_04_operator.js

// 산술연산자 ( +, -, *, /, %, +=, -=, *=, /=, ++, -- )

var n = 10;
console.log(n, typeof n);

var plus = n + 10;
console.log(plus);

var minus = n-10;
console.log(minus);

var multi = n * n
console.log(multi);

var avg = n / 3
console.log(avg);

var other = n % 3; // % : 나누기를 한 후 나머지 값
console.log(other);

var parI = parseInt(avg); 
console.log('나누었을 때 몫 :', parI);

// ---------------------------------

var textNum = 1024 + 'px';
var textPar = parseInt(textNum); //parseint : 정수 뒤의 나머지나 text 값을 없애줌
console.log(textPar, typeof textPar );

console.clear();

console.log('n : ', n);

n = n + 10; // 변수 n에 기존에 가지고 있던 n의 값 + 10을 재대입
console.log ('n :', n);

n = n + 5;
console.log ('n :', n);

n += 10; // 자기자신에게 10을 추가
console.log ('n :', n);

n -= 5;
console.log ('n :', n);

n *= 5 ; // **= n제곱
console.log ('n :', n);

n /= 50 ;
console.log ('n :', n);

n %= 2;
console.log ('n :', n);


// console.clear();
// -----------------------------

console.log('n :', n);

n += 1;
console.log('n :', n);

n += 1;
console.log('n :', n)

++n; // 무조건 1을 더한다. 먼저 연산 후 결과를 저장, 전치연산자
console.log('n :', n);

++n;
++n;
++n;
++n;
++n;
console.log('n :', n);

n++; // 무조건 1을 더한다. 먼저 결과 도출 후 연산, 후치연산자
n++;
n++;
n++;
console.log('n :', n);
console.log('n :', n++);
console.log('n :', n);
console.log('n :', ++n);

console.clear();
console.log('n :', n);
n -=1;
console.log('n :', n);
--n;
--n;
--n;
--n;
--n;
--n;
console.log('n :', n);
n--;
n--;
n--;
console.log('n :', n);
console.log('n :', n--);
console.log('n :', n);

console.clear();

// 비교연산자 --------------------------------------------
// (왼쪽값 비교 오른쪽값) -- 결과 true/false

var m = 30;
var rel = n <= m;
console.log('n :' + n, 'm :' +m, 'result:' + rel);

rel = n >= m;
console.log('n :' + n, 'm :' +m, 'result:' + rel);

var n2 = '4';
var nCk = n === n2 // ==는 형태를 보는게 아니라 값 자체만 봄. === 는 형태와 값 까지 봐서 더 정확한 연산 가능
console.log(n, n2, nCk ); 

var ck1 = true && false; // ===와 같음
console.log(ck1);

var ck2 = true || false; // 둘 중 하나만이라도 true이면 true (or)
console.log(ck2);
console.clear();

// 삼항연산자 ---------------------------------------
// (1)조건 ? (2)true일 때 결과 : (3)false일 때 결과 ;

var k = 5;
var kRel;

(k >= 10) ? kRel = '숫자가 10보다 큰 숫자' : kRel = '숫자가 10보다 작은 숫자' ;
console.log(kRel); 


// ----------------------------------------------
// #btn -> getElementById('아이디 이름');
// .content -> getElementsByClassName('클래스 이름');
// 클릭? -> 이벤트 -> addEventListener('이벤트명');
// .content 내용을 변경 -> ?.innerText = "내용"

var btn = document.getElementById('btn');
var par = document.getElementsByClassName('content')[0];
var i=0;

btn.addEventListener('click', function(){
  i += 1;
par.innerText = "내용이 변경, " + i + "번 클릭";  
})

