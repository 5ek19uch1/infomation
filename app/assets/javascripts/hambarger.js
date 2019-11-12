$('turbolinks:load',function() {
  $('.fa-bars').click(function() {
    $('.ham-menu').show();
  });
  $('.close-modal').click(function(){
    $('.ham-menu').fadeOut();
  });
});