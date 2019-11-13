
//modal_menu---------------------------------
$(function() {
  $('.menu-icon').click(function() {
    $('#ham-menu').fadeIn();
  });
  $('.fa-times').click(function(){
    $('.ham-menu').fadeOut();
  });
});


//Return_to_top_button-----------------------
$(function() {
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });
});
