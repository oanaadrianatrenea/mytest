jQuery(document).ready(function ($) {


  setInterval(function () {
    if ($('#slider ul li').length > 1) {
      moveRight();
    }
  }, 3000);

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();

  calculateSliderHeight();

	var sliderUlWidth = (slideCount + 1) * slideWidth;
  var slideIndex = 0;

if ($('#slider ul li').length > 1) {
	$('#slider').css({ width: slideWidth, height: slideHeight });
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('#slider ul li:last-child').prependTo('#slider ul');
}

    function moveLeft() {
      slideIndex = (slideIndex == 0) ? $('#slider ul li').length - 1 : slideIndex - 1;
      activateBullet();
      $('#slider ul li:last-child').clone().prependTo('#slider ul');

        $('#slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider ul li:last-child').remove();
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
      slideIndex = (slideIndex == $('#slider ul li').length - 1) ? 0  : slideIndex + 1;
      activateBullet();
        $('#slider ul li:first-child').clone(true).appendTo('#slider ul');
        $('#slider ul').animate({
            left: - slideWidth
        }, 500, function () {
              $('#slider ul li:first-child').remove();
            $('#slider ul').css('left', '');
        });
    };

    $( window ).resize(function() {
      slideWidth = $(window).width();
      slideHeight = $(window).height() * 0.65;
      sliderUlWidth = (slideCount + 1) * slideWidth;

      calculateSliderHeight();

      $('#slider, #slider li').css({ width: slideWidth, height: slideHeight });
    	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    });

    function activateBullet(){
      $(".paginationBullets .bullet").removeClass("active");
      $(".paginationBullets .bullet").eq(slideIndex).addClass("active");
    }

    function calculateSliderHeight() {
      if ($(".slider").width() < 850) {
        slideHeight = $('#slider ul li .sliderImage-mobile').height() + $('#slider ul li .productDetails').height() + 60;
      }
    }
});

function showHideSearchBox() {
  $(".searchPopup").toggleClass("hide");
}

function showHideMenu() {
  $(".mobileMenu").toggleClass("mobileHide");
}
