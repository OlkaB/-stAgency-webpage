"use strict";

//sticky nav
$(document).ready(function(){
      $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) {
          $(".navbar-fixed-top").css("background-color", "#f9f8fb");
        } else {
          $(".navbar-fixed-top").css("background-color", "transparent");
        }
      });
    });


//smooth scrolling
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
      return false;
    }
  }
});