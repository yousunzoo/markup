// main_03_bestBox.js

(function($){
// 변수
var bestBox = $('#bestBox');

var btnArea = bestBox.find('.best_btn');
var nextBtn = btnArea.find('.next');
var prevBtn = btnArea.find('.prev');

var horizontal = bestBox.find('.horizontal_slide');
var horizontalLi = horizontal.children('li');
var originLiLen = horizontalLi.length;

// ------------------------------------------
var permission = true;
var i=0;
var play;

// 함수
var nextBtnFn = function(){
  if(permission = true){
    permission = false;
    i += 1;

    if (i >= originLiLen){
      horizontal.css({'marginLeft':280+'px'});
      i=0;
    } // 특정 상황에서만 수행할 내용 -- i가 6이 될때 클론 6을 보여줌
    horizontal.stop().animate({'marginLeft':-280 * i +'px'}, function(){
      if(i < 0) {
        i = originLiLen - 1;
        horizontal.css({'marginLeft':-280 * i +'px'});
      }; // dumy 6번 li가 아니라 맨 마지막 li(실제 li)로 보냄
      permission = true;
    })
  } // if(permission)
}; // nextBtnFn()
var prevBtnFn = function(){
  if(permission = true){
    permission = false;
    i -= 1;
    horizontal.stop().animate({'marginLeft':-280 * i +'px'}, function(){
      if(i < 0){
        i = originLiLen - 1;
        horizontal.css({'marginLeft':-280 * i +'px'});
      }; // if(i) dumy 6번 li가 아니라 맨 마지막 li(실제 li)로 보냄
      permission = true;
      });
    } // if(permission) 
    }; //prevBtnFn()

// 기능 수행
var cloneLi1 = horizontalLi.eq(-1).clone();
horizontal.prepend(cloneLi1);
var cloneLi2 = horizontalLi.eq(0).clone();
horizontal.append(cloneLi2);

var cloneLi3 = horizontalLi.eq(1).clone();
horizontal.append(cloneLi3);

var newHorizontalLi = horizontal.children('li');
var newLiLen = newHorizontalLi.length;

horizontal.css({'width':(280*newLiLen)+'px', left:-280+'px'});


// 이벤트
nextBtn.on('click', function(e){
  e.preventDefault();
  nextBtnFn();
  console.log(i);
}); // nextBtn.on('click')
prevBtn.on('click', function(e){
  e.preventDefault();
  prevBtnFn();
  console.log(i);
}); // prevBtn.on('click')


})(jQuery);