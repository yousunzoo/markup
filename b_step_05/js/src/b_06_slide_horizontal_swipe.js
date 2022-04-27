// b_06_slide_horizontal_swipe.js
(function($){
// 기능설명

// 변수 -----------------------
var slideSet = $('.slide_set');
var horizontal = slideSet.find('.horizontal_slide');
var horizontalDiv = horizontal.children('div');
var originDivLen = horizontalDiv.length;

var i=0;
var permission = true;

// 함수 -----------------------------------
var nextSwipeFn = function(){
  if(permission){
    permission = false;
    i += 1;

    if (i >= originDivLen){
      horizontal.css({marginLeft:100+'%'});
      i=0;
    } // 특정 상황에서만 수행할 내용 ( 내용 5 -> 내용 1)
    horizontal.stop().animate({marginLeft:-100*i+'%'}, function(){ permission=true; }); // 기본적으로 수행할 내용
  } // if(permission)
} // nextSwipeFn()
var prevSwipeFn = function(){
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
} // prevSwipeFn()


// 기능 수행 ---------------------------------------
var cloneDiv = horizontalDiv.eq(-1).clone();
horizontal.prepend(cloneDiv);

var newHorizontalDiv = horizontal.children('div');
var newDivLen = newHorizontalDiv.length;
var startX, endX;

horizontal.css({width:(100 * newDivLen)+'%', left:-100+'%'});
newHorizontalDiv.css({width:(100/newDivLen)+'%'}); 

// 이벤트 ---------------------------------------
slideSet.on('touchstart', function(e){
  startX = parseInt(e.originalEvent.touches[0].clientX);
}); // slideSet.on('touchstart')

slideSet.on('touchend', function(e){
  endX = parseInt(e.originalEvent.changedTouches[0].clientX);
  // console.log(e.originalEvent.changedTouches[0].clientX);
  var resultX = startX-endX;
  // console.log(resultX);
  if(resultX > 50){
    nextSwipeFn();
  }else if( resultX < -50 ){
    prevSwipeFn();
  } // if
})


// screenX, screenY -> 모니터의 좌표
// clientX, clientY -> 보이는 화면(브라우저의 보이는 그 자체)
// pageX, pageY -> 스크롤 값을 포함한 브라우저 좌표
})(jQuery);