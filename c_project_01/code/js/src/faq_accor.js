// faq_accor.js

(function($){

// 사용할 기능
/**
 * dt를 클릭 시 dd 나타나게
 * - dt 클릭 시 preventDefault
 * - dt>button 에 포커스 처리 시 dd 나타나게
 * dt를 클릭 시 다른 형제(siblings) dl에 있는 dd를 사라지게
 * dt를 클릭 시 dd가 나타나 있는 경우 사라지게
 * - class를 삽입해서 class 있으면 dd 사라지게, 없으면 나타나게
 */

// 변수
var accor = $('.accor');
var accorDl = accor.children('dl');
var accorDt = accorDl.children('dt');
var accorDd = accorDl.children('dd');

// 이벤트 기능
accorDt.on('click', function(e){
e.preventDefault(); // 선행 이벤트 정지 처리
var _this = $(this);
var i = _this.parent().index(); // accorDt 부모(accorDl)의 인덱스

var dlI = accorDl.eq(i); 
console.log(i);

if( dlI.hasClass('on') ){
  console.log('true');
  dlI.removeClass('on');
  dlI.find('dd').stop().slideUp();
  dlI.stop().animate({'backgroundColor':'none'});
  _this.css({'backgroundColor':'var(--white_03)'})
} else {
  console.log('false');
  dlI.addClass('on');
  dlI.siblings().removeClass('on');

  _this.nextAll(accorDd).stop().slideDown();
  dlI.siblings().find('dd').stop().slideUp();
  dlI.stop().animate({'backgroundColor':'var(--white)', 'borderRadius':5+'px'});
  _this.stop().animate({'backgroundColor':'var(--white)'});

} // if


}) // accorDt.on('click')




})(jQuery);