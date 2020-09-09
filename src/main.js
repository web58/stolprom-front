

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
  }



});


