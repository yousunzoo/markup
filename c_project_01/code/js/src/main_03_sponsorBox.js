// main_03_sponsorBox.js
(function($){
// 스폰서 파트 무한 루프

var sponsorBox = $('#sponsorBox')
var horizontal = sponsorBox.find('ul');
var horizontalLi = horizontal.children('li');
var originLiLen = horizontalLi.length;

var i=0;
var permission = true;

var cloneLi, j=0;
for (; j < originLiLen ; j++ ){
 var cloneLi = horizontalLi.eq(j).clone();
 horizontal.append(cloneLi);
}
var newHorizontalLi = horizontal.children('li');
var newLiLen = newHorizontalLi.length;
var play;

var slideGoFn= function(e){
 play = setInterval(function(){
   horizontal.trigger('click');
 }, 1000);
}; //slideGoFn()


horizontal.css({'width' : 160 * newLiLen+'px', 'marginLeft' : -160 + 'px'})



horizontal.on('click', function(e){
  e.preventDefault();

  i += 1;

  horizontal.stop().animate({'marginLeft': -160 * i + 'px'}, 1000, 'easeInOutQuad', function(){
    if(i >= originLiLen){
      horizontal.css({'marginLeft' : 0})
      i = 0;
    };
  });


console.log;
})

slideGoFn();

})(jQuery);

// 요소 복제로 할 때 주의 사항 - 한바퀴를 돌 수 있도록 통으로 copy해야 함
// setInterval 안에 함수 다 넣을 수 있도록 한번!