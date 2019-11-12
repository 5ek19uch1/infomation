$(function() {
  $('.menu-icon').click(function() {
    $('#ham-menu').fadeIn();
  });
  $('.fa-times').click(function(){
    $('.ham-menu').fadeOut();
  });
});


// $(function() {
//   $(document).on('click','.fa-bars',function() {
//     $('.ham-menu').fadeIn();
//   });
// });


// $(document).ready(function(){
//   $('fa-bars').click(function(){
//     $('.ham-menu').fadeIn();
//   });
// });

