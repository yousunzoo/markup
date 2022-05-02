// main_03_sponsorBox.js
(function($){
// 스폰서 파트 무한 루프

var sponsorBox = $('#sponsorBox')
var horizontal = sponsorBox.find('ul');
var horizontalLi = horizontal.children('li');
var originLiLen = horizontalLi.length;

var i=0;
var permission = true;

var cloneL0 = horizontalLi.eq(-1).clone();
horizontal.prepend(cloneL0);
var cloneL1 = horizontalLi.eq(0).clone();
horizontal.append(cloneL1);
var cloneL2 = horizontalLi.eq(1).clone();
horizontal.append(cloneL2);
var cloneL3 = horizontalLi.eq(2).clone();
horizontal.append(cloneL3);
var cloneL4 = horizontalLi.eq(3).clone();
horizontal.append(cloneL4);
var cloneL5 = horizontalLi.eq(4).clone();
horizontal.append(cloneL5);
var cloneL6 = horizontalLi.eq(5).clone();
horizontal.append(cloneL6);
var cloneL7 = horizontalLi.eq(6).clone();
horizontal.append(cloneL7);

var newHorizontalLi = horizontal.children('li');
var newLiLen = newHorizontalLi.length;
var play;

var slideGoFn= function(){
 play = setInterval(function(){
   horizontal.trigger('click');
 }, 1000);
}; //slideGoFn()


horizontal.css({'width' : 160 * newLiLen+'px', 'marginLeft' : -160 + 'px'})



horizontal.on('click', function(e){
  e.preventDefault();

  i += 1;

  if(i>originLiLen){
    horizontal.css({'marginLeft' : 0})
    i=0;
  };

  horizontal.stop().animate({'marginLeft': -160 * i + 'px'});


console.log;
})

slideGoFn();

})(jQuery);