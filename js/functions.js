// Navigation
$(document).ready(function($){
  $(".dropdown-button").dropdown();
});
// Animate background color
$(document).ready(function($){
    var nav = $('.navbar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 14.208000000000002) {
            nav.addClass("nav");
            jQuery(".navbar nav").animate({ backgroundColor: "#fff" }, 0 );
        } else {
            nav.removeClass("nav");
        }
    });
});
// Animate height change
$(document).ready(function($){
    var nav = $('nav');
    var logo = $('#logo');
    var line = $('.hvr-overline-from-left');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 13.35) {
            nav.addClass("smallnav");
            logo.addClass("logosmall");
            line.addClass("hvr-overline-from-leftsmall");
        } else if($(this).scrollTop() >= 0) {
            nav.removeClass("smallnav");
            logo.removeClass("logosmall");
            line.removeClass("hvr-overline-from-leftsmall");
        }
    });
});
// Page options

// Smooth scroll to anchors
$(document).ready(function(){
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
});