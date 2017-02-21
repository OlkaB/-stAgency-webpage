console.log("works");

// ----------------- sticky nav -----------------
$(document).ready(function(){
      $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) {
          $("nav").css("background-color", "rgba(0,0,0,.9)");
        } else {
          $("nav").css("background-color", "transparent");
        }
      });
    });


// ----------------- smooth scrolling -----------------
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



// -----------------  burger menu  -----------------
/* JS solution
document.getElementById('burgerIcon').addEventListener('click', toggleNavVisibility);
function toggleNavVisibility(){
  var navItem = document.getElementsByTagName('nav')[0];
  navItem.className == "" ? navItem.className = "mobile" : navItem.className = "";
}
*/

// JQ solution
$(".burgerIcon").click(function(){
  $("nav").toggleClass("mobile");
});

