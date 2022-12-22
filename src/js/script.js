let slider = $(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});

$(document).ready(function() {
  $('.menu__icon').click(function(){
    $('body').toggleClass('menu_shown');
  });
});
