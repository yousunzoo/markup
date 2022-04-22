// b_03_jQuery_contents.js
(function($){
  
  // var exw = document.getElementsByClassName('ex_wrap')[0];
  // exw.innerHTML = '<p>내용작성</p>'
  
  var exWrap = $('.ex_wrap');
  exWrap.html('<p>하나의 요소를 삽입하기 위해 <span>html 문서를 생성</span>하여 처리</p>');


  // 선택자.html(내용) : 요소를 삽입
  // 선택자.text(텍스트) : 글자를 삽입
  
  var exHtmlCheck = exWrap.html(); // 요소+내용 가져오기
  var exTextCheck = exWrap.text(); // 글자만 가져오기
  var exConCheck = exWrap.contents(); // 배열 형식으로 가져오기. contents는 삽입 기능은 없고 확인 기능만 가능

  console.log(exHtmlCheck);
  console.log(exTextCheck);
  console.log(exConCheck);

  exWrap.html('<div class="in_wrap"></div>');
  exWrap.children('div').html(exConCheck);

  exConCheck.wrap('<div class="inner"></div>');

  console.clear();
  // -----------------------------------------------------

  var inWrap = exWrap.children('.in_wrap');
  inWrap.before('<p>before는 어디에 생성이 될 것인가? - 01</p>');
  inWrap.before('<p>before는 어디에 생성이 될 것인가? - 02</p>');
  inWrap.before('<p>before는 어디에 생성이 될 것인가? - 03</p>');
  inWrap.before('<p>before는 어디에 생성이 될 것인가? - 04</p>');
  inWrap.after('<p>after는 어디에 생성이 될 것인가? - 01</p>');
  inWrap.after('<p>after는 어디에 생성이 될 것인가? - 02</p>');
  inWrap.after('<p>after는 어디에 생성이 될 것인가? - 03</p>');
  inWrap.after('<p>after는 어디에 생성이 될 것인가? - 04</p>');

  inWrap.append('<a href="#">append는 어디에 a요소를 통해 생성? - 01</a><br />'); // 해당 요소 내부의 맨 끝에 집어넣음
  inWrap.append('<a href="#">append는 어디에 a요소를 통해 생성? - 02</a><br />'); 
  inWrap.append('<a href="#">append는 어디에 a요소를 통해 생성? - 03</a><br />'); 
  inWrap.append('<a href="#">append는 어디에 a요소를 통해 생성? - 04</a><br />'); 

  inWrap.append('<div class="link_area"></div>')
  var linkarea = inWrap.children('.link_area');

  // linkarea 내부에 inWrap 내부에 있는 a요소를 옮겨담겠다.
  linkarea.append(inWrap.find('a'));

  // inWrap 내부에 있는 br요소를 linkarea 내부에 옮겨담겠다.
  inWrap.find('br').appendTo(linkarea);

  // --------------------------------------------
  // prepend : 내부에 첫번째에 내용 삽입, 변수와 태그 이름 통해 요소의 위치 이동
  inWrap.prepend('<button>버튼삽입 1</button>');
  inWrap.prepend('<button>버튼삽입 2</button>');
  inWrap.prepend('<button>버튼삽입 3</button>');

  // var linkarea = inWrap.find('.link_area');
  inWrap.prepend(linkarea);
  var btn = inWrap.find('button');
  btn.prependTo(linkarea);

  // before -- 해당 요소의 전에
  // after -- 해당 요소의 후에
  // append / appendTo -- 해당 요소 내부의 맨 끝에 집어넣음
  // prepend / prepend To -- 해당 요소의 맨 처음에 집어넣음
})(jQuery);