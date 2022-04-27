// b_05_slide_horizontal_btn_v3.js
(function($){

//-----------------------------------
// 변수
var part = $('.part');

var slideSet = $('.slide_set');
var btnArea = slideSet.find('.slide_btn');
var nextBtn = btnArea.find('.next');
var prevBtn = btnArea.find('.prev');

var indiArea = slideSet.find('.indicator');
var indiUl = indiArea.children('ul');
var indiLi = indiUl.children('li');
var indiLink = indiLi.children('a');

var indiP = indiArea.find('p');
var nowI = indiP.find('.now');
var nowT = indiP.find('.total');

var horizontal = slideSet.find('.horizontal_slide');
var horizontalDiv = horizontal.children('div');
var originDivLen = horizontalDiv.length;

// -----------------------------------------
var permission = true;
var i = 0;
var timed = 1000;
var play;

// 함수
var nextBtnFn = function(){
  if(permission){
    permission = false;
    i += 1;

    if (i >= originDivLen){
      horizontal.css({marginLeft:100+'%'});
      i=0;
    } // 특정 상황에서만 수행할 내용 ( 내용 5 -> 내용 1)
    horizontal.stop().animate({marginLeft:-100*i+'%'}, function(){ permission=true; }); // 기본적으로 수행할 내용
  } // if(permission)
} // nextBtnFn()
var prevBtnFn = function(){
  if(permission){
    permission=false;
    i -= 1;
    horizontal.stop().animate({marginLeft:-100 * i +'%'}, function(){
      if(i < 0) {
        i = originDivLen -1;
        horizontal.css({marginLeft: -100 * i +'%'});
      }; // dumy 5번 div가 아니라 맨 마지막 div(실제 div)로 보냄
      permission = true;
    });
  } // if(permission)
} // prevBtnFn()
var indicatorFn = function(){
  indiLi.eq(i).addClass('action');
  indiLi.eq(i).siblings().removeClass('action');
} // indicatorFn() -- indicator에 action 클래스 부여
var nowIFn = function(){
  nowT.text(originDivLen);
  nowI.text(i+1);
} // nowIFn() -- 해당 페이지가 몇번째 내용인지 체크
var slideGoFn = function(){
  play = setInterval(function(){
    /*
    nextBtnFn();
    indicatorFn();
    nowIFn();
    */
    nextBtn.trigger('click'); // nextBtn의 click하는 기능을 대신 수행
    
  }, timed*2);
} // slideGoFn() -- 슬라이드가 자동으로 움직이게
var slideStopFn = function(){
  clearInterval(play);
} // slideStopFn() -- 슬라이드 멈추게

// 기능 수행(수행 및 체크)
var cloneDiv = horizontalDiv.eq(-1).clone();
horizontal.prepend(cloneDiv);

var newHorizontalDiv = horizontal.children('div');
var newDivLen = newHorizontalDiv.length;

horizontal.css({width:(100 * newDivLen)+'%', left:-100+'%'});
newHorizontalDiv.css({width:(100/newDivLen)+'%'})

nowIFn(); // -- 초기 상태 (nowI = 1)

// 일정 시간 마다 동작 / 강제로 조건에 의해 해제


slideGoFn();


// 이벤트
nextBtn.on('click', function(e){
  e.preventDefault();
  nextBtnFn();
  indicatorFn();
  nowIFn();
}); // nextBtn.on('click')

prevBtn.on('click', function(e){
  e.preventDefault();
  prevBtnFn();
  indicatorFn();
  nowIFn();
}); //// prevBtn.on('click')

indiLink.on('click', function(e){
  e.preventDefault();
  i = $(this).parent().index();
  horizontal.stop().animate({marginLeft:-100*i+'%'});
  indicatorFn();
  nowIFn();
}) // indiLink.on('click')

part.on('mouseenter', function(){
  slideStopFn();
})
part.on('mouseleave', function(){
  slideGoFn();
})
})(jQuery);