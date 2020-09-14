

jQuery(function($) {

  $('.header__burger-wrap').on('click', function () {
    $('body').toggleClass('header_opened');
  });

  if (window.matchMedia("(min-width: 1200px)").matches) {

    $(window).on("scroll", function () {
      scroll = $(this).scrollTop();
      if (scroll > 110) {
        $('body').addClass('header-scrolled');
      } else {
        $('body').removeClass('header-scrolled');
      }
    });
  } else if (window.matchMedia("(max-width: 767px)").matches){

    $('.choose-slider').slick({
      slidesToShow: 1,
      dots: false,
      nextArrow: '<div class="next-button-slide"></div>',
      prevArrow: '<div class="prev-button-slide"></div>',
      arrows: true
    });
  }

  $('.def-slider').slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    nextArrow: '<div class="next-button-slide"></div>',
    prevArrow: '<div class="prev-button-slide"></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


});


