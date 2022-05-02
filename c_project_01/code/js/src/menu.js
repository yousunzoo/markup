// menu.js

(function($){
  // step 1. json data 불러와서 설정
$.ajax({
url : "../json/menu.json",
context : document.body
}).done(function(data){
var dataFile = data;

var i = 0;
var len = dataFile.length;
var tabTitle = [];
for( ; i < len ; i += 1){
  tabTitle.push(dataFile[i].type);
}

// tab menu title 설정
// 중복되는 배열의 값 정리
var tabTitleCheck = tabTitle.filter(function(data, index){
return tabTitle.indexOf(data) === index;
}) // tabTitleCheck

console.log(tabTitleCheck);

// tab menu 내용 구성에 맞는 목록 체크
var tabMenuSet;
var tabMenuFn = function(n){
  tabMenuSet = dataFile.filter(function(data){
    return data.type === tabTitleCheck[n];
  }); // tabMenuSet
} // tabMenuFn

// ----------------------------------------------------------
  // step 2. 불러온 json data 기반으로 구성 배치
//변수
var tabArea = $('.tab_box');
var tabT = tabArea.find('.tab_title');
var cardArea = tabArea.find('.card_area');


//tabTitle 내부에 탭메뉴 제목부 구성 : tabTitleCheck 이용
tabT.html('<ul></ul>'); // tabT 내부의 내용을 '<ul></ul>'로 바꿈
var TabTUl = tabT.children('ul');
var titleEl = '<li><button type=button"></button></li>';
var tabTLen = tabTitleCheck.length;

for (i=0; i < tabTLen; i+= 1){
 TabTUl.append(titleEl);
 TabTUl.find('button').eq(i).text(tabTitleCheck[i]);
}; // for 각 배열에 해당하는 제목 붙여넣기

var tabTLi =tabT.find('li');
var tabBtn = tabTLi.find('button');
tabTLi.css({'width': (100 / tabTLen) + '%'});
tabTLi.eq(0).addClass('action');

// step 3 : 내용을 구성하기 위한 세팅 및 함수 처리
cardArea.html('<ul class="card_list clearfix"></ul>');
var cardMenu = cardArea.find('.card_list');

var cardMenuSetFn = function(k){
tabMenuFn(k);
cardMenu.empty();
var cardListSet = '<li><div class="card_img"></div><dl><dt class="card_title"></dt><dd class="card_content"></dd><dd class="card_link"><a href="#">자세히보기</a></dd></dl></li>';

var j=0;
var tabSetLen = tabMenuSet.length;
var liIndex, tSet, hrefText, imgUrl;

for ( ; j<tabSetLen; j+=1){
cardMenu.append(cardListSet);
liIndex = cardMenu.children('li').eq(j);
tSet = tabMenuSet[j]; // n번째 title에 해당하는 내용 불러오기
imgUrl = 'url("../../img/menu_page/' + tSet.type + '/' + tSet.image +'")';
hrefText = './' + tSet.couse + '/' + tSet.link;

liIndex.find('.card_img').css({'backgroundImage' : imgUrl });
liIndex.find('dt').text(tSet.menu);
liIndex.find('.card_content').text(tSet.account);
liIndex.find('a').attr({href:hrefText});

} // for 카드에 해당하는 내용 삽입
} // cardMenuSetFn();

cardMenuSetFn(0); // menu 페이지 불러올 때 띄울 기본 셋팅

// step 4 : 탭메뉴 처리 설정
tabBtn.on('click', function(e){
  e.preventDefault();
  var n = $(this).parent().index();
  tabBtn.parent().eq(n).addClass('action');
  tabBtn.parent().eq(n).siblings().removeClass('action');

  cardMenuSetFn(n);
}) // 탭제목 클릭시 class 부여 및 탭제목에 해당하는 내용 불러오기



}) // $.ajax()
})(jQuery);