'use strict';
$(document).ready(function(){
// ----------------- sticky nav -----------------
$(window).scroll(function() { 
  if ($(document).scrollTop() > 50) {
    $("nav").css("background-color", "rgba(0,0,0,.93)");
  } else {
    $("nav").css("background-color", "transparent");
  }
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


// -----------------  modal gallery  -----------------
// images must be named "number.format" i.e 1.jpg or 4.png; place images in subfolder "gallery" in "img" folder or change code
//*close modal wind*
$(".closeModalBttn").click(function(){  
  $(".modalGallery").css({"display":"none"});
});

//*open modal wind*
$("#portfolio img").click(function(){
  var $clickedImgSrc = $(this).attr('src'), $srcForModalPic = "url('" + $clickedImgSrc + "')";
  $(".modalGallery").css({"display":"block"});
  $(".galleryPicture").css({"background-image": $srcForModalPic});
});

//*scroll picture*
$(".scrollPic").click(function(){
  var $mathSign = "", 
  $currentImgUrl = $(".galleryPicture").css('background-image'),
  $currentImgNum = $currentImgUrl.slice(-7).substring(0,1),
  $nextImgNum = 0,
  $maxNumOfItemsInGalleryFolder = 9,  //manually declared;
  $srcForModalPic=''; 

      this.id == "prevPicBttn" ? $mathSign = "-" : $mathSign = "+";
      $nextImgNum = eval($currentImgNum + $mathSign + 1);
      if ($nextImgNum > $maxNumOfItemsInGalleryFolder) {
        $nextImgNum = 1;
      }
      else if ($nextImgNum < 1) {
        $nextImgNum = $maxNumOfItemsInGalleryFolder;
      }
      $srcForModalPic = "url('../img/gallery/" + $nextImgNum + ".jpg')";
      $(".galleryPicture").css({"background-image": $srcForModalPic});
    });




//the end
});