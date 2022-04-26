//b_07_accordion.js

(function($){
// jQuery

// 사용할 기능 / 내용 정리
//1. dt를 클릭시 dd를 나타나게 만들기
// - dt를 클릭시 선행 이밴트 발생 정지
// - dt>button 을 키보드 포커스처리시 dd를 나타나게
// 2. dt를 클릭시 이후에 오는 형제인 모든 dd를 나타나게
// 3. dt를 클릭 시 다른 형제(siblings) dl에 있는 dd를 사라지게
// 4. dt를 클릭 시 뒤에 오는 요소가 dd가 나타나 있는 경우 사라지게
// - class를 삽입하여, 존재하면 사라지게, 없다면 나타나게

// 변수지정
var accor = $('.accor');
var accorDl = accor.children('dl');
var accorDt = accorDl.children('dt');
var accorDd = accorDl.children('dd');

// 이벤트 기능
accorDt.on('click', function(e){
  e.preventDefault();
  // console.log($(this).text())
  // 1,2. 선택한 dt 이후에 오는 dd를 나타나게 하자
  var _this = $(this);
  // 5번 조건문에 의해 주석처리
  // _this.nextAll(accorDd).slideDown();
  
  // ----------------------------------------------------------
  // 1. 선택한 dt의 부모의 다른 형제의 자식인 dd를 사라지게 하자
  // _this.parent().siblings(accorDl).find(accorDd).hide();
  
  // ----------------------------------------------------------
  // 3. 선택한 dt의 부모의 순서
  var i = _this.parent().index();
  // 3-1. 파악된 순서를 제외한 dl의 내부에 있는 dd 사라지게
  // 5번의 조건문에 의해 주석
  // accorDl.eq(i).siblings().find('dd').slideUp();
  
  // ----------------------------------------------------------
  // 4. 선택한 dt에 클래스 삽입
  // 5번 기능으로 내용 주석
  // accorDl.eq(i).addClass('on');
  // accorDl.eq(i).siblings().removeClass('on');
// ----------------------------------------------------------
  // 5. class 유무 파악 후 추가 기능을 설정
  var dlI = accorDl.eq(i);
  // class기능의 유무 파악 : hasClass('className') --> t/f
  if( dlI.hasClass('on') ){
    console.log('true');
    accorDl.eq(i).removeClass('on');
    dlI.find('dd').stop().slideUp()
  } else {
    console.log('false');
    dlI.addClass('on');
    dlI.siblings().removeClass('on');

    _this.nextAll(accorDd).stop().slideDown();
    dlI.siblings().find('dd').stop().slideUp();
  }

});


})(jQuery);