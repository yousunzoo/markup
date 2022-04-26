// menu_cardList.js

var cardArea = document.getElementsByClassName('card_area')[0];
var cardUl = cardArea.getElementsByTagName('ul')[0];

// coffee list
var coffee = [
  {'image' : 'coffee/01.png',
  'imageNarr' : 'coffee/01.png',
  'link':'123456',
  'title' : 'special',
  'content': 'special 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer','sale']},
  {'image' : 'coffee/01.png',
  'imageNarr' : '이미지 설명',
  'link':'45679516',
  'title' : 'espresso',
  'content': 'espresso 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['hot','sale']},
  {'image' : 'coffee/02.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'americano',
  'content': 'americano 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','sale']},
  {'image' : 'coffee/03.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'cafe latte',
  'content': 'cafe latte 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','sale']},
  {'image' : 'coffee/04.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'cappucino',
  'content': 'cappucino 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot']},
  {'image' : 'coffee/05.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'cafe mocha',
  'content': 'cafe mocha 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer','sale']},
  {'image' : 'coffee/06.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'caramel macchiato',
  'content': 'caramel macchiato 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer','sale']},
  {'image' : 'coffee/07.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'flat white',
  'content': 'flat white 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer']},
  {'image' : 'coffee/08.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'cold brew',
  'content': 'cold brew 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer','sale']},
  {'image' : 'coffee/09.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'Ristretto',
  'content': 'Ristretto 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer','sale']},
  {'image' : 'coffee/10.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'Lungo',
  'content': 'Lungo 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer','sale']},
  {'image' : 'coffee/11.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'Espresso con panna',
  'content': 'Espresso con panna 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer','sale']},
  {'image' : 'coffee/12.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'Frappuccino',
  'content': 'Frappuccino 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer','sale']},
  {'image' : 'coffee/13.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'Cortado',
  'content': 'Cortado 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer','sale']},
  {'image' : 'coffee/14.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'vanilla latte',
  'content': 'vanilla latte 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer','sale']},
  {'image' : 'coffee/15.png',
  'imageNarr' : '이미지 설명',
  'link':'#',
  'title' : 'hand drip',
  'content': 'hand drip 해당 커피에 대한 두 줄 정도의 설명',
  'option' : ['cold','hot','summer','sale']}];

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

