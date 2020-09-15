

jQuery(function($) {

  // BURGER MIBILE START
  $('.header__burger-wrap').on('click', function () {
    $('body').toggleClass('header_opened');
  });
  // BURGER MIBILE FINISH

  // MENU WINDOW SCROLL AND SLIDER ONLY FOR MOBILE START
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
  // MENU WINDOW SCROLL AND SLIDER ONLY FOR MOBILE FINISH


  // MAIN PAGE PRODUCTS SLIDER START
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
  // MAIN PAGE PRODUCTS SLIDER FINISH


  // CATALOG PRODUCTS SLIDER START
  $('.category__slider').slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    nextArrow: '<div class="next-button-slide"></div>',
    prevArrow: '<div class="prev-button-slide"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  // CATALOG PRODUCTS SLIDER FINISH

  //PRODUCT SLIDER START
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="next-button-slide"></div>',
    prevArrow: '<div class="prev-button-slide"></div>',
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    nextArrow: '<div class="next-button-slide"></div>',
    prevArrow: '<div class="prev-button-slide"></div>',
    centerMode: true,
    centerPadding: '20%',
    focusOnSelect: true
  });
  //PRODUCT SLIDER FINISH


});


