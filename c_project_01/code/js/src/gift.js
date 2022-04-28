// gift.js

(function($){
// gift_list.json 파일 불러오기 -- $.ajax()
// gift_list의 길이만큼 li 생성 -- append
// 각각의 카드에 맞는 내용 삽입 -- css, text, attr
$.ajax({
  url:"../json/gift_list.json",
  context : document.body
}).done(function(data){
  var giftList = data;
  // console.log(giftList);


// 변수
var liEl = '<li class="gift_card"><div class="img_space"><span class="blind"></span></div><dl><dt></dt><dd class=data_con></dd><dd class="link_detail"><a href="#">상세보기</a></dd><dd class="link_shopping clearfix"><a href="#" class="basket">장바구니</a><a href="#" class="buy">구매하기</a></dd></dl></li>';

var cardArea = $('.card_area');
var cardUl = cardArea.children('ul');


var i = 0;
var len = giftList.length;

for(; i<len; i+=1){
  cardUl.append(liEl); 
} // cardUl에 giftList.length-1만큼 li 생성

var cardLi = cardUl.children('li'); // ! cardUl.append(liEl)를 수행한 다음에 변수 선언 해야함. 안그러면 li 갯수는 0

// 함수
var cardInsertFn = function(n){
var list = giftList[n];
var liN = cardLi.eq(n);
var imgSpace = liN.children('.img_space');
var imgText = imgSpace.find('span');
var imgUrl = 'url("../../img/gift_page/card_list/'+ list.image +'")'
var title = liN.find('dt');
var con = liN.find('.data_con');
var linkDetail = liN.find('.link_detail').children('a');
var linkBasket = liN.find('.link_basket');
var linkBuy = liN.find('.link_buy');


imgSpace.css({'backgroundImage': imgUrl});
imgText.text(list.image_alt);
title.text(list.title);
con.text(list.content);
linkDetail.attr({href:list.link_detail});
linkBasket.attr({href:list.link_basket});
linkBuy.attr({href:list.link_buy});


} //cardInsertFn()

for(i=0; i<len; i+=1){
  cardInsertFn(i);
} // 카드리스트에 각각 내용 삽입

}) // .ajax();
})(jQuery);