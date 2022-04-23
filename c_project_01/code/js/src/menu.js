// menu.js

(function($){

var wrap = $('#wrap');
var menuBox = wrap.find('#menuBox');
var btnsArea = menuBox.find('.btns_area');
var btn = btnsArea.children('button')
var btnSpan = btn.children('span')

btn.eq(0).on('click', function(e){
  e.preventDefault();
  btnSpan.eq(0).css({'backgroundColor' : 'var(--primary_01)', 'color':'var(--white)'})
});
btn.eq(1).on('click', function(e){
  e.preventDefault();
  btnSpan.eq(1).css({'backgroundColor' : 'var(--primary_01)', 'color':'var(--white)'})
});
btn.eq(2).on('click', function(e){
  e.preventDefault();
  btnSpan.eq(2).css({'backgroundColor' : 'var(--primary_01)', 'color':'var(--white)'})
});
btn.eq(3).on('click', function(e){
  e.preventDefault();
  btnSpan.eq(3).css({'backgroundColor' : 'var(--primary_01)', 'color':'var(--white)'})
});

btn.eq(4).on('click', function(e){
  e.preventDefault();
  btnSpan.eq(4).css({'backgroundColor' : 'var(--primary_01)', 'color':'var(--white)'})
});








})(jQuery);