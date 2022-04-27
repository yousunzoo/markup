// b_04_slide_horizontal_btn_v2.js

(function($){
// 기능 설명 
/** = 다음 버튼을 클릭 시 .horizontal_slide 기능 움직이도록 처리
 * - 수행 전, .horizontal_slide 내부에 있는 요소(div)의 마지막 요소를 복제하여 앞으로 이동 -- dummy div
 * - .horizontal_slide 영역은 내부 기존 갯수보다 +1된 값만큼 가로값을 늘려주기
 * - 보이는 내용은 무조건 1번째 내용이 보이도록 처리
 */

//-----------------------------------
// 변수
var slideSet = $('.slide_set');
var btnArea = slideSet.find('.slide_btn');
var nextBtn = btnArea.find('.next');
var prevBtn = btnArea.find('.prev');

var horizontal = slideSet.find('.horizontal_slide');
var horizontalDiv = horizontal.children('div');
var originDivLen = horizontalDiv.length;

var permission = true;
var i=0;

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

// 기능 수행(수행 및 체크)
var cloneDiv = horizontalDiv.eq(-1).clone();
horizontal.prepend(cloneDiv);
var newHorizontalDiv = horizontal.children('div');
var newDivLen = newHorizontalDiv.length;
horizontal.css({width:(100 * newDivLen)+'%', left:-100+'%'});
newHorizontalDiv.css({width:(100/newDivLen)+'%'})

// 이벤트
nextBtn.on('click', function(e){
  e.preventDefault();
  nextBtnFn();
}); // nextBtn.on('click)

prevBtn.on('click', function(e){
  e.preventDefault();
  prevBtnFn();
});


})(jQuery);