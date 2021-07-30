$(document).ready(function () {

  if ($('.projects__slider').length) {
    $('.projects__slider').owlCarousel({
      main: 0,
      items: 1,
      dots: true,
    });
  }

  if ($('.customers__slider').length) {
    $('.customers__slider').owlCarousel({
      margin: 30,
      loop: true,
      autoWidth: true,
      center: true,
      dots: false,
      autoplay: true,
      items: 9
    });
  }

  $('input').on('change', function () {
    $(this).attr('value', $(this).val());
  });

  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  $('.cta-button').on('click', function (e) {
    $('#modal').arcticmodal({
      beforeOpen: function () {
        $('.services__card').addClass('services__card--hidden');
      },
      beforeClose: function () {
        $('.services__card').removeClass('services__card--hidden');
      }
    });
  });

  $('.burger').on('click', function () {
    $(this).toggleClass('burger--open');

    $('.header__menu').toggleClass('header__menu--open');
    $('.header__right').slideToggle();
  });

  $('.card').on('click', function () {
    $(this).toggleClass('card--open');
  });

});
