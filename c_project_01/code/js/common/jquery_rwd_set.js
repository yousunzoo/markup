// b_03_reponsive_js_set.js

(function($){
// 기능설명
/**
 * = 각 디바이스 환경을 확인하여, 필요시 그에 따른 기능을 수행할 수 있는 기본 세팅
 * - 기준 디바이스 가이드를 불러오기 $.ajax() or $getJSON()
 * - 기존 크기를 확인 및 디바이스 크기 기준 디바이스를 설정
 * - 브라우저 크기가 변경되면 변경된 크기를 파악하여, 기존 디바이스 환경과 다른 환경일 경우 변경할 처리를 체크
 */

var jsonData = '../data/device_type.json';
$.getJSON(jsonData, function(data){
// console.log(data);
  var deviceGuide = data;


// 변수
var win = $(window);
var winW = win.width();
var checkType, deviceResult;

// if(winW >= deviceGuide[3].size){
//   checkType = deviceGuide[3].type;
// }else if(winW >= deviceGuide[2].size){
//   checkType = deviceGuide[2].type;
// }else if(winW >= deviceGuide[1].size){
//   checkType = deviceGuide[1].type;
// }else{
//   checkType = deviceGuide[0].type;
// }


// 함수
var deviceCheckFn = function(){
  var guideLen = deviceGuide.length;
  var i = guideLen - 1;
  
  for(; i >= 0 ; i -=1){
    if(winW >= deviceGuide[i].size){
      checkType = deviceGuide[i].type;
      break;
    }else{
      checkType = deviceGuide[i].type;
    }
  } // for
  // console.log(checkType);
  return $.CheckType = checkType; // -- $. : jQuery 기본 문서에 담김
} // deviceCheckFn()

var beforeDevice = deviceCheckFn();
// console.log(beforeDevice);


// 이벤트
win.on('resize', function(){
  winW = win.width()
  var afterDevice = deviceCheckFn();
  // console.log(afterDevice);
  if(beforeDevice !== afterDevice){
    console.log(afterDevice);
    beforeDevice = afterDevice;
    deviceResult = beforeDevice;
    location.reload();
  }
}); // win.on('resize')


// ------------------------------
}); // $.getJSON();

})(jQuery);