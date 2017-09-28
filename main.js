$(document).ready(function() {
  $('.navigation__menu-toggle ').on('click', function() {
    $('.navigation__nav-section').stop(true,true).toggleClass('expanded'); // stop() prevents chained click animations
  });
});
