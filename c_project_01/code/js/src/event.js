// event.js

(function($){
// 기능설명
// 사용자 속성( attr([속성명]) ) 값을 가져오는 방법

// 변수
var modal = $('.modal_list');
var modalLi = modal.find('li');
var modalBtn = modalLi.children('button');

var modalWindow = $('.modal_window');
var modalClose = modalWindow.find('.close_btn');
var closeBtn = modalClose.children('button');

var modalContent = modalWindow.find('.modal_content');
var modalImg = modalContent.find('.img_content');
var modalH = modalContent.children('h3');
var modalP = modalContent.children('p');

var bigImgUrl = '../../img/event_page/'
var timed = 500;
var i = 0;
var par, img, title, narr;

// 함수
var imgUrlFn = function(data){
  var url = 'url("'+bigImgUrl+data+'")';
  return url;
} // 이미지 주소 설정

// console.log(imgUrlFn('content_01.png'));

// 이벤트
modalBtn.on('click', function(e){
  e.preventDefault();

  // 이미지와 기능 가져오기
  par = $(this).parent();
  img = par.attr('data-img');
  title = par.attr('data-title');
  narr = par.attr('data-narr');

  // 띄울 창의 내용에 내용 담기
  modalH.text(title);
  modalP.text(narr);
  modalImg.css({'backgroundImage' : imgUrlFn(img)}); // 이미지 담기

  // modal_window 나타나게 만들기
  modalWindow.fadeIn(timed, function(){
    closeBtn.focus(); // 창 띄우면 닫기 버튼에 포커스
  }); // modalWindow.fadeIn()


}) // modalBtn.on('click')

// 닫기 버튼 닫기 기능 수행
closeBtn.on('click', function(e){
  e.preventDefault();
  modalWindow.fadeOut(timed);
})

})(jQuery);