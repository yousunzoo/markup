// b_03_rwd_file.js

(function($){
// 기능설명
/** 
 * = device 크기를 판단하여 그에 따른 기능을 수행할 수 있도록 처리
 */
  var jsonData = '../data/device_type.json';
  $.getJSON(jsonData, function(data){
    
  var checkType = $.CheckType;
  console.log(checkType);

  });
})(jQuery);