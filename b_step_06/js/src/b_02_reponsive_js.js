// b_02_reponsive_js.js

(function($){
// 기능설명
/**
 * = 사용하고 있는 브라우저 또는 디바이스 환경의 가로크기를 기준으로 움직임을 파악하겠다.
 * 1. 현재 크기에서 브라우저의 크기가 변화했는지 파악 -> $(window), on('resize')
 * 2. 현재의 가로값 체크, 변화된 내용에서 가로값이 변화했는지 여부 파악 -> width();
 *  - 요소의 가로값을 파악 : 선택자.width();
 *  - 요소의 가로값(padding을 포함한)을 파악 : 선택자.innerWidth();
 *  - 요소의 가로값(padding+border)을 파악 : 선택자.outerWidth();
 *  - 요소의 가로값(padding+border+margin)을 파악 : 선택자.outerWidth(true); -- jquery에만 존재
 */

// 변수
var win = $(window); // $(document) -- 둘다 따옴표 사용 안함
var beforeW = win.width(); // win.css('width') 

var deviceSize = 1024;
var deviceType = ['pc', 'hand helds'];
var beforeDeviceType;
var nowDeviceType;

var exWrap = $('.ex_wrap');
var baseUrl = '../page/rwdHtml/';
var deviceHtml = ['pc.html', 'handHelds.html'];

// 함수
var deviceCheckFn = function(nowWidth){
if(nowWidth >= deviceSize){
  nowDeviceType = deviceType[0];
  exWrap.load(baseUrl + deviceHtml[0])
}else{
  nowDeviceType = deviceType[1];
  exWrap.load(baseUrl + deviceHtml[1])
}
// console.log(nowDeviceType, nowWidth);
return nowDeviceType;
}; // deviceCheckFn(nowWidth)

beforeDeviceType = deviceCheckFn(beforeW);

// 이벤트
win.on('resize', function(){
  // console.log('브라우저 사이즈가 변화했습니다.')
  var afterW = win.width();
  deviceCheckFn(afterW);

  if(beforeDeviceType !== nowDeviceType){
    // location.reload(); -- 페이지 새로고침

    console.log('디바이스 환경이 변화되었습니다.');
    console.log(beforeDeviceType, ':', nowDeviceType);
    beforeDeviceType = nowDeviceType;
    beforeW = afterW;
  }
})


})(jQuery);