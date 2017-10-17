$(document).ready(function() {
  $('.js-nav-toggle').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.navigation').stop(true, true).slideToggle(400, function() {
      $(this).toggleClass('expanded');
    });
  });
  $(window).resize(function() {
    var $navigationEl = $('.navigation');
    var windowWidth = $(window).width();
    if(windowWidth >= "768") {
      $navigationEl.show();
    } else if (windowWidth < "768" && !$navigationEl.hasClass('expanded')) {
      // If the menu was expanded
      $navigationEl.hide();
    }
  });
});
