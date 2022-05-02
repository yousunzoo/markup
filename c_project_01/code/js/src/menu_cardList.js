// menu_cardList.js

var cardArea = document.getElementsByClassName('card_area')[0];
var cardUl = cardArea.getElementsByTagName('ul')[0];


  // ------------------------------------------
var makeLi, cardLi, coffeeList, imgPath, cardImgSelector, cardLink, cardTitle, cardCon, cardOption, makeSpan;
var coffeeLength = coffee.length;
var liLen = 0;
var IMGURL ='../img/menu_page/';
var j = 0;

for ( ; liLen < coffeeLength; liLen += 1){
  makeLi = document.createElement('li');
  imgPath =IMGURL + coffee[liLen].image;
  makeLi.innerHTML = '<a><div class="card_img"></div><dl><dt class="card_title"></dt><dd class="card_content"></dd><dd class="card_option"></dd></dl></a>';
  
  //** */ a 요소에 href 설정
  // cardLink = makeLi.getElementsByTagName('a')[0];
  cardLink = makeLi.children[0];
  // cardLink.href = coffee[liLen].link;
  cardLink.setAttribute('href',coffee[liLen].link);

  //** .card_img 요소 내부에 backgroundImage 설정
  cardImgSelector = makeLi.getElementsByClassName('card_img')[0];
  cardImgSelector.style.backgroundImage ='url('+ imgPath +')'

  //** .card_title 내부에 title 작성
  cardTitle = makeLi.getElementsByClassName('card_title')[0];
  cardTitle.innerText = coffee[liLen].title

  //** .card_content 내부에 내용 작성
  cardCon = makeLi.getElementsByClassName('card_content')[0];
  cardCon.innerText = coffee[liLen].content;

  cardOption = makeLi.getElementsByClassName('card_option')[0];

  for(j=0; j < coffee[liLen].option.length ; j+=1){
  makeSpan = document.createElement('span');
  makeSpan.innerText = coffee[liLen].option[j];
  cardOption.append(makeSpan);
  }


  //** ul요소에 li 넣기
  cardUl.append(makeLi);
  cardLi = cardUl.getElementsByTagName('li')[liLen];
}

