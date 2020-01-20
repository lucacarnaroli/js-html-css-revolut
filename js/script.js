$(document).ready(
  function() {
    $('.parent-dropdown').mouseenter(
      function () {
        $(this).children('.dropdown').addClass('active');
      }
    );
    $('.parent-dropdown').mouseleave(
      function () {
        $(this).children('.dropdown').removeClass('active');
      }
    );
    $('.icon').mouseenter(
      function () {
        $('.arrow').hide();
        $('.arrow-up').show().addClass('black');
      }
    )

    $('.icon').mouseleave(
      function () {
      $('.arrow').show();
      $('.arrow-up').hide().removeClass('black');
    }
  )

  }
);
