$(function (){
  $('.js-scheme-link').click(function(){
      let isExpanded = $(this).attr('aria-expanded');
      console.log(isExpanded);
      let unSelectProgram = 'border-4 border-primary arrow';

      if(isExpanded === 'true'){
        $('.js-scheme-option .card').removeClass(unSelectProgram).hide();
        $('.js-scheme-option .card').parent().removeClass('mb-3 mb-md-5 mb-lg-5');
        $('.select-course').removeClass('d-none');
        $('.js-reserve-notice').addClass('pt-8');
        $('.continue-reserve-btn').removeClass('d-none');
        $(this).parent().parent().parent().addClass('border-4').addClass('border-primary').addClass('arrow').show();
      }else{
        $('.select-course').addClass('d-none');
        $('.js-reserve-notice').removeClass('pt-8')
        $('.continue-reserve-btn').addClass('d-none');
        $('.js-scheme-option .card').removeClass(unSelectProgram).addClass('mb-3 mb-md-5 mb-lg-5').show();
      }
  })
  $('.courseswiper-items').click(function(){
    $('.courseswiper-items').removeClass('border-4 border-white').addClass('border-0');
    $(this).removeClass('border-0').addClass('border-4 border-white');
    $('.js-course-icon').removeClass('text-white');
    $('.js-course-icon',this).addClass('text-white');
  })
})
var swiper = new Swiper(".mySwiper", {
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  //   hide: true,
  // },
  slidesPerView: 2,
  grid: {
    fill: 'row',
    rows: 2,
  },
  spaceBetween: 30,

  breakpoints: {

    768: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },

    992: {
      slidesPerView: 1.5,
      grid: {
        rows: 1,
      },
    },
  },
});

var swiper = new Swiper(".customswiper", {
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'row',
  },
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 768 md
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    // when window width is >= 992 lg
    992: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    // when window width is >= 1200 xl
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    }
  },
});

var swiper = new Swiper(".mySwiper-yogaSpace", {
  slidesPerView: 1.25,
  spaceBetween: 30,
  // breakpointsInverse: true,
  breakpoints: { 
    480: { 
      slidesPerView: 2,
      spaceBetween: 30
    },
    //當寬度大於等於640
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  freeMode: true,

});

var swiper = new Swiper(".teacherswiper", {
  // slidesPerView: 1.5,
  // spaceBetween: 30,

  grid: {
    rows: 4,
    fill: 'row'
  },

  breakpoints: {

    768: {
      slidesPerView: 2.1,
      spaceBetween: 30,
      grid: {
        rows: 1,
      }
    },

    992: {
      slidesPerView: 3.2,
      spaceBetween: 30,
      grid: {
        rows: 1,
      }
    }
  }
});

var swiper = new Swiper(".courseswiper", {
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'row',
  },
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 768 md
    768: {
      slidesPerView: 2.1,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 30,
    },
    // when window width is >= 1200px xl
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 30,
    }
  }
});