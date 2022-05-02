// gift_slide.js

(function($){
/**
 * = 버튼 클릭 시 .horizontal_slide 가로로 이동하게 만들기(무한)
 * - next 클릭. horizontal_slide 가로 1칸 이동 ( margin-left:-100% )
 * - 움직이고 난 후 내부 div의 첫 번째를 맨 마지막으로 강제 이동, 
 * - 동시에 .horizontal_slide를 원위치로 이동 ( margin-left: 0 )
 */

// 변수

var slideSet = $('.slide_area');
var btnArea = slideSet.find('.slide_btn');
var nextBtn = btnArea.find('.next');
var prevBtn = btnArea.find('.prev');

var slideArea = slideSet.find('.slide_list');
var horizontal = slideArea.find('.horizontal_slide');
var horizonDl = horizontal.find('dl');
var permission = true;

horizonDl.eq(1).addClass('on');

// 이벤트

nextBtn.on('click', function(e){
  if(permission){
    permission = false;
  e.preventDefault();
  horizontal.stop().animate({'marginLeft' : -280 + 'px'},function(){
  var dlFirst = horizonDl.eq(0);
  horizontal.append(dlFirst);
  horizontal.css({marginLeft : 0});

  horizonDl = horizontal.children('dl');
  horizonDl.eq(1).addClass('on');
  horizonDl.eq(1).siblings().removeClass('on');
  permission = true;
  }) // horizontal.stop().animate
  } // if(permission)
}) // nextBtn.on('click')

prevBtn.on('click', function(e){
  e.preventDefault();

  if(permission){
  permission = false;
  var DiLast = horizonDl.eq(-1);
  horizontal.prepend(DiLast);
  horizontal.css({'marginLeft' : -280+'px'});

  horizontal.stop().animate({marginLeft:0}, function(){
    horizonDl = horizontal.children('dl');
    horizonDl.eq(1).addClass('on');
    horizonDl.eq(1).siblings().removeClass('on');
    permission = true;
  })
  } // if(permission)
})

})(jQuery);