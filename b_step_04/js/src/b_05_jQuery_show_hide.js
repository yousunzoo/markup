// b_05_jQuery_show_hide.js

(function($){
// jQuery

var exWrap = $('.ex_wrap');
var galleryImg = exWrap.find('.gallery_img');
var btnArea = exWrap.find('.btn');
// var btnList = btnArea.children('li');
var view =  btnArea.find('.view')
var fade =  btnArea.find('.fade')
var slide =  btnArea.find('.slide')
var classSet =  btnArea.find('.class_set')
var timed = 600;

// galleryImg.css({'display':'block'});
// --------------------------------------
// view (show/hide/toggle) -- zoon in/out
var viewBtn = view.children('button');

viewBtn.eq(0).on('click', function(e){
  e.preventDefault();
  galleryImg.show(timed);
});

viewBtn.eq(1).on('click',function(e){
  e.preventDefault();
  galleryImg.hide(timed);
});

viewBtn.eq(2).on('click', function(e){
  e.preventDefault();
  galleryImg.toggle(timed);
});

// -----------------------------------------
// fade(fadeIn/ fadeOut / fadeToggle) -- 나타나고 사라짐
// 기본적으로 시간이 일정량 들어가있음 (기본 600)
var fadeBtn = fade.children('button');

fadeBtn.eq(0).on('click', function(e){
  e.preventDefault();
  galleryImg.stop().fadeIn(timed);
});
fadeBtn.eq(1).on('click', function(e){
  e.preventDefault();
  galleryImg.stop().fadeOut(timed);
});
fadeBtn.eq(2).on('click', function(e){
  e.preventDefault();
  galleryImg.stop().fadeToggle(timed);
});

// --------------------------------------
// slide (slideDown / slideUp / slideToggle) -- 위아래로 나타나고 사라짐
var slideBtn = slide.children('button');

slideBtn.eq(0).on('click', function(e){
  e.preventDefault();
  galleryImg.slideDown(timed * 2);
});
slideBtn.eq(1).on('click', function(e){
  e.preventDefault();
  galleryImg.slideUp(timed * 2);
});
slideBtn.eq(2).on('click', function(e){
  e.preventDefault();
  galleryImg.slideToggle(timed * 2);
});

// --------------------------------------
// classSet : ( addClass / removeClass / toggleClass ) -- class 추가
var classBtn = classSet.children('button');
var act = 'action_view';

classBtn.eq(0).on('click', function(e){
  e.preventDefault();
  galleryImg.addClass(act);
})
classBtn.eq(1).on('click', function(e){
  e.preventDefault();
  galleryImg.removeClass(act);
})
classBtn.eq(2).on('click', function(e){
  e.preventDefault();
  galleryImg.toggleClass(act);
})


})(jQuery);