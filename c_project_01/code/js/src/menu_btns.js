
(function($){


  var btnsArea = $('.btns_area');
  var btn = btnsArea.children('button');
  var btnSpan = btn.children('span');
  
  btn.on('click', function(e){
    e.preventDefault();
    var i = $(this).index();
    btn.eq(i).addClass('action');
    btn.eq(i).siblings().removeClass('action');
  });
  
  })(jQuery);