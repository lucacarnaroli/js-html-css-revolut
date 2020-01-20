$(document).ready(
  function() {
    $('parent-dropdown').mouseenter(
      function () {
        $(this).next('.dropdown').addClass('.active');
      }
    )
    // $('.conti').click(
    //   function (){
    //   $('.dropdown').hide();
    // }
  );
}
);
