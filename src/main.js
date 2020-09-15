

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
    centerMode: true,
    centerPadding: '20%',
    focusOnSelect: true
  });
  //PRODUCT SLIDER FINISH



  //ABOUT PAGE SLIDERS START
  $('.about__left-slider').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="next-button-slide"></div>',
    prevArrow: '<div class="prev-button-slide"></div>'
  });

  $('.equipment__left-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="next-button-slide"></div>',
    prevArrow: '<div class="prev-button-slide"></div>',
    fade: true,
    asNavFor: '.equipment__right-slider'
  });
  $('.equipment__right-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.equipment__left-slider',
    dots: false,
    arrows: true,
    fade: true,
    prevArrow: $('.equipment__right .custom-prev'),
    nextArrow: $('.equipment__right .custom-next')
  });

  var currentSlide = $('.equipment__left-slider').slick('slickCurrentSlide') + 1;
  var allSlide = $(".equipment__left-slider").slick("getSlick").slideCount;
  $('.equipment__right .custom-all').text(allSlide);

  $('.equipment__left-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('.equipment__right .custom-current').text(currentSlide + 1);
  });


  $('.thanks__slider-on').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    prevArrow: $('.thanks .custom-prev'),
    nextArrow: $('.thanks .custom-next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  var currentSlideThanks = $('.thanks__slider-on').slick('slickCurrentSlide') + 1;

  var allSlideThanks = $(".thanks__slider-on").slick("getSlick").slideCount;
  $('.thanks .custom-all').text(allSlideThanks);

  $('.thanks__slider-on').on('afterChange', function(event, slick, currentSlideThanks, nextSlide) {
    $('.thanks .custom-current').text(currentSlideThanks + 1);
  });

  $('.review__slider-in').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.review .custom-prev'),
    nextArrow: $('.review .custom-next'),
    fade: true,
  });
  var currentSlideReview = $('.review__slider-in').slick('slickCurrentSlide') + 1;
  console.log(currentSlideThanks);

  var allSlideReview = $(".review__slider-in").slick("getSlick").slideCount;
  $('.review .custom-all').text(allSlideReview);

  $('.review__slider-in').on('afterChange', function(event, slick, currentSlideReview, nextSlide) {
    $('.review .custom-current').text(currentSlideReview + 1);
  });
  //ABOUT PAGE SLIDERS FINISH


});


