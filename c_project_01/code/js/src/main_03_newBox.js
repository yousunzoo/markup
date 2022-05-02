// main_03_new.js

(function($){
// 기능 설명
/**
 * indicator를 클릭 시, 해당하는 광고 내용이 나타나게 하라.
 * .horizontal_slide의 가로 이동(margin-left)
 */

// 변수
var newBox = $('#newBox');
var indicator = newBox.find('.area_indicator');
var indiLi = indicator.find('li');
var indiLink = indiLi.children('a');

var slide = newBox.find('.new_content');
var horizontalSlide = slide.children('.horizontal_slide');

var i = 0;
var timed = 200;

// 이벤트
indiLink.on('click', function(e){
  e.preventDefault();

  i = $(this).parent().index();
  var percent = - 100 * i + '%';
  horizontalSlide.stop().animate({'marginLeft' : percent}, timed);

  indiLi.eq(i).addClass('act');
  indiLi.eq(i).siblings().removeClass('act');
})

})(jQuery);