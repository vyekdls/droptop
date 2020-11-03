// main.js

// 2단계 메뉴
$(function(){
  $('.depth1 > li').hover(
    function(){
      $('.depth2').stop().slideDown(200);
    },
    function(){
      $('.depth2').stop().slideUp(200);
    }
  );
})

// bxslider 
$(document).ready(function(){

  $('#visual').imagesLoaded( function() {
    // images have loaded
    $('.slider').bxSlider({
      // 효과: horizontal', 'vertical', 'fade'
      mode: 'fade',
      // 인터벌 시간
      pause: 5000,
      // 자동재생: true | false
      auto: true
    });
  });

});

// Pick slider
$(function () {
  var left = 0;
  var duration = 3000;
  var slider;
  
  function changeSlider(paramLeft) {
    $('.pager > a').removeClass('active');
    $('.pager > a').eq(paramLeft).addClass('active');
  }

  function sliderStart() {
    slider = setInterval(function () {
      $("#pick > .grid").hide();
      if(left > 1) {
        left = 0;
      }
      else {
        left = left + 1;
      }
      //$('#pick > ul > li').css('left', left);
      $("#pick > .grid").eq(left).show();
      console.log(left);
      changeSlider(left);
    }, duration);
  }

  // 슬라이더 정지
  function sliderStop() {
    clearInterval(slider);
    // console.log('stop');
  }

  sliderStart();

  // 마우스가 올라가면 슬라이더 정지
  $('.grid, .pager').hover(
    function() {
      sliderStop();
    },
    function() {
      sliderStart();
      // console.log('start');
    }
  )

}) //$end
