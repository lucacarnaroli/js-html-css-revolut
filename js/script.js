$(document).ready(
  function() {
    $('.conti').mouseenter(
      function () {
        $('.dropdown').show();
      }
    )
    $('.conti').mouseleave(
      function (){
      $('.dropdown').hide();
    }
  );
}
);
