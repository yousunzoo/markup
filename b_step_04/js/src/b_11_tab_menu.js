// b_11_tab_menu.js
/*
  var dataFile;
  console.log('처음:', dataFile); // 1 (걸리는 시간)
  $.ajax({
    url:"../json/menu.json",
    context:document.body
  }).done(function(data){
    dataFile=data;
    console.log('내부:', dataFile); // 3
  });

  console.log('외부:', dataFile); // 2 (data불러오는데 시간이 걸려서 3이 수행되기 전엔 undefined로 처리됨)

  setTimeout(function(){
    console.log('일정시간 후에:', dataFile); //4
  }, 100);

*/
(function($){

/* 
$.getJSON("../json/menu.json", function(data){
  console.log(data);
}); // json 파일 가져오는데 유용
 ajax : 이미지 등 여러가지 파일을 가져올 수 있음, 외부에 공개하지 못함. getJSON 보다는 보다 명확하게 확인할 수 있음
*/

$.ajax({
  url:"../json/menu.json",
  context:document.body
}).done(function(data){
  var dataFile = data;
  // console.log(dataFile);

  var i=0;
  var len = dataFile.length;
  var tabTitle = [];
  for(; i < len; i += 1){
    tabTitle.push( dataFile[i].type);
  }
  // console.log(tabTitle);

  /* tab menu title 설정 ------------------------------------------------------- */
  // 배열.filter(function(data, index){ }) : 원하는 것을 찾아서 골라오기 -- forEach와 비슷
  // indexOf() : 문자열/배열에서 작성한 요소와 일치하는 순서를 파악

  // 중복되는 배열의 값을 정리해주는 기능
  var tabTitleCheck = tabTitle.filter(function(data,index){
    // console.log(data, index);
    return tabTitle.indexOf(data) === index;
  })
  // console.log(tabTitleCheck);

  /* tab menu 내용 구성에 맞는 목록 체크 ----------------------------------------------- */
  var tabMenuSet; 
  var tabMenuFn = function(n){
    tabMenuSet = dataFile.filter(function(data){
      return data.type === tabTitleCheck[n];
    });
  }
  tabMenuFn(1);
  console.log(tabMenuSet);

  // --------------------------------------------------------

  // 기능 설명
  // 1. 선택된 버튼의 순서를 파악
  // 2. 선택된 버튼의 내용에 맞는 구성을 설정


  // 변수
  var tabArea = $('.tab_area');
  var tabTitle = tabArea.find('.tab_title');
  var tabTLi = tabTitle.find('li');
  var tabBtn = tabTLi.find('button');
  var tabContent = tabArea.find('.tab_content');
  var tabConMenu = tabContent.find('.tab_list'); 

  // 이벤트
  tabBtn.on('click', function(e){
    e.preventDefault();
    var i = $(this).parent().index();
    tabBtn.parent().eq(i).addClass('on');
    tabBtn.parent().eq(i).siblings().removeClass('on');
    tabConMenu.text('tab 구성' + (i+1))
  })


}); // $.ajax()


})(jQuery);
