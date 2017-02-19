console.log("works");

//sticky nav
$(document).ready(function(){
      $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) {
          $("nav").css("background-color", "rgba(0,0,0,.8)");
        } else {
          $("nav").css("background-color", "transparent");
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

//burger menu
/*
$(".burgerIcon").click(function(){
  $("p").toggleClass("class1 class2");
});*/

