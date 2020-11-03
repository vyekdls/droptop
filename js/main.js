

$(function () {
    var img_num = 0; // 이미지 번호
    var duration = 3000; // 인터벌 시간
    var slider;   // slider 실행 객체 변수
  
    // 초기화
    $('.slider > img').fadeOut();
    $('.slider > img').eq(img_num).fadeIn();
  
    // 
    function changeSlider() {
      // 전체 이미지 fadeOut
      $('.slider > img').fadeOut();
      // 현재 이미지 fadeIn
      $('.slider > img').eq(img_num).fadeIn();
      // pager UI 업데이트
      $('.pager > a').removeClass('active');
      $('.pager > a').eq(img_num).addClass('active');
    }
  

    // 슬라이더 재생
    function sliderStart() {
      slider = setInterval(function () {
        // 마지막 이미지 번호이면 처음으로 
        if (img_num >= 2) { img_num = 0 } else {
          // 다음 이미지 번호로
          img_num = img_num + 1;
        }
        changeSlider(img_num);
      }, duration);
    }
  
    // 슬라이더 정지
    function sliderStop() {
      clearInterval(slider);
      console.log('stop');
    }
  
    sliderStart();
  
    // 마우스가 올라가면 슬라이더 정지
    $('.slider, .left, .right').hover(
      function () {
        sliderStop();
      },
      function () {
        sliderStart();
        console.log('start');
      }
    )
  
    // 이전 이미지 버튼
    $('.controls > .left').click(function () {
      if(img_num > 0) {
        img_num = img_num - 1
      } else { img_num = 2; }
      console.log(img_num);
      changeSlider();
    })
  
    // 다음 이미지 버튼
    $('.controls > .right').click(function () {
      if(img_num < 2) {
        img_num = img_num + 1;
      } else { img_num = 0; }
      console.log(img_num);
      changeSlider();
    })
  

    
    $('.depth1 > li').hover(
        function() {
            $('.accent').css('display','block');
        },

        function() {
            $('.accent').css('display','none');
        }
    )

    $('.depth1 > li:nth-child(1)').hover(
        function() {
            $('.accent').css('left','288px');
        },

        function() {
            $('.accent').css('display','none');
        }
    )
    
    $('.depth1 > li:nth-child(2)').hover(
        function() {
            $('.accent').css('left','400px');
        },

        function() {
            $('.accent').css('display','none');
        }
    )

    $('.depth1 > li:nth-child(3)').hover(
        function() {
            $('.accent').css('left','512px');
        },

        function() {
            $('.accent').css('display','none');
        }
    )

    $('.depth1 > li:nth-child(4)').hover(
        function() {
            $('.accent').css('left','644px');
        },

        function() {
            $('.accent').css('display','none');
        }
    )
    
    $('.depth1 > li:nth-child(5)').hover(
        function() {
            $('.accent').css('left','776px');
        },

        function() {
            $('.accent').css('display','none');
        }
    )

    $('.depth1 > li:nth-child(6)').hover(
        function() {
            $('.accent').css('left','913px');
        },

        function() {
            $('.accent').css('display','none');
        }
    )


  }) // $end