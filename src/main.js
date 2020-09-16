

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


  //CATALOG MENU START
  // $('.parent-arrow').on('click', function () {
  //   $(this).closest('.parent').toggleClass('active').find('ul:first').slideToggle(300);
  // });

  var activeClassName = 'active';
  var catalog = $('#catalog-menu');

  catalog.on('click', '.parent-arrow', function (event) {
    var _t = $(this).closest('.parent');
    var _ta = _t.hasClass(activeClassName);

    if (_ta) {
      _t.removeClass(activeClassName);
    } else {
      _t.closest('ul').find('.' + activeClassName).removeClass(activeClassName);
      _t.addClass(activeClassName);
    }
  });


  if (window.matchMedia("(min-width: 1200px)").matches){
    if($("#catalog-menu").length){
      $('.catalog__menu').addClass('opened');
    }
  } else {
    $('.catalog__menu-subtitle').on('click', function () {
      $(this).closest('.catalog__menu').toggleClass('opened');
    });
  }
  //CATALOG MENU FINISH



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

  var allSlideReview = $(".review__slider-in").slick("getSlick").slideCount;
  $('.review .custom-all').text(allSlideReview);

  $('.review__slider-in').on('afterChange', function(event, slick, currentSlideReview, nextSlide) {
    $('.review .custom-current').text(currentSlideReview + 1);
  });
  //ABOUT PAGE SLIDERS FINISH


  //  TIMER START
  if ($('#discount').hasClass('discount')){
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector(".days");
      var hoursSpan = clock.querySelector(".hours");
      var minutesSpan = clock.querySelector(".minutes");
      // var secondsSpan = clock.querySelector(".seconds");

      function updateClock() {
        var t = getTimeRemaining(endtime);

        if (t.total <= 0) {
          $('#discount').css('display', 'none');
          clearInterval(timeinterval);
          return true;
        }

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        // secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 10000);
    }

    var deadlineEndless = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
    var deadline = $('.discount').attr('data-deadline');
    initializeClock('discount', deadline);
  }
  //  TIMER FINISH



  // FORMS START
  $('.callback-call').on('click', function () {
    $('#callback-form').fadeIn()
  });

  $('.wholesaler-call').on('click', function () {
    $('#wholesaler-form').fadeIn()
  });

  $('.order-call').on('click', function () {
    $('#order-form').fadeIn()
  });

  $('.order-call-custom').on('click', function () {
    var customFormOrder = $(this).closest('.def-item-wrap').find('.def-item__title').text();
    $('#order-form').fadeIn();
    $('#order-form .order-form-product').val(customFormOrder);
  });

  $('.order-call-product').on('click', function () {
    var productFormOrder = $(this).closest('.product__right').find('.def-title').text();
    $('#order-form').fadeIn();
    $('#order-form .order-form-product').val(productFormOrder);
  });

  $('.def-popup__back, .def-popup__front-exit').on('click', function () {
    $('#callback-form, #wholesaler-form, #order-form').fadeOut();
  });
  // FORMS FINISH

  var goToBack = document.referrer
  $('.go-to-back').attr('href', goToBack);


});


