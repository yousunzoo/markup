// b_09_modal.js

(function($){
// 기능설명
// 사용자 속성( attr([속성명]) )값을 가져오는 방법
/*
var testLi = $('.modal_list').find('li').eq(0);
var checkAttr = testLi.attr('data-img');
var checkAttr2 = testLi.attr('data-narr');
console.log(checkAttr, ' : ', checkAttr2);
*/

/*
// 1. 버튼을 클릭시 해당하는 요소의 부모에 있는 속성값(img, narr)을 파악 (attr)
// 2. .modal_content 에 배경 이미지를 담고, p요소에 글자를 변경 (css, text)
// 3. .modal_window 나타나게 만들기 (show, fadeIn, slideDown...)
// 4. .modal_window 닫기 버튼 클릭 시 사라지게 만들기 (hide, fadeOut, slideUp...)
 */

//변수
var modal = $('.modal');
var modalLi = modal.find('li');
var modalBtn = modalLi.children('button');

var modalWindow = $('.modal_window')
var modalClose = modalWindow.find('.close_btn');
var closeBtn = modalClose.children('button');

var modalContent = modalWindow.find('.modal_content');
var modalP = modalContent.children('p');

var bigImgUrl = '../../img/album/view/'
var timed = 300

// 함수
var imgUrlFn = function(data){
  // var url = 'url("' + bigImgUrl + data +'")';
  var url = 'url("../../img/album/view/' + data +'")';
  return url;
}
// console.log(imgUrlFn('box.png'));

//이벤트
modalBtn.on('click', function(e){
  e.preventDefault();
  //이미지와 기능 가져오기
  var par = $(this).parent();
  var img = par.attr('data-img');
  var narr = par.attr('data-narr');

  // 띄울 창의 내용에 담기
  modalContent.css({'backgroundImage' : imgUrlFn(img)});
  modalP.text(narr);

  // modal_window 나타나게 만들기
  modalWindow.fadeIn(timed, function(){
    closeBtn.focus();
  });
});

// 닫기 버튼에 포커스 생성
closeBtn.on('click', function(e){
  e.preventDefault();
  modalWindow.fadeOut(timed);
})



})(jQuery);

// callBack - 해당 기능 수행한 후 함수를 불러오는 것 (강제로 순서 할당)