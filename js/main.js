/*------------------------------------
 *Author:Storrea LTD
 *Template:Aamar Shop Online
 *Version:1.0
 *-------------------------------------
 */


jQuery(document).ready(function() {

  /*
   * ----------------------------------------------
   *-----------------Preloader---------------------
   * ----------------------------------------------
   */

  // var themeWindow = $(window);
  // var pagebody = $('html, body');
  //
  // themeWindow.on("load", function() {
  //
  //   var preloader = jQuery('.preloader');
  //   var preloaderArea = jQuery('.preloader-area');
  //   preloader.fadeOut();
  //   preloaderArea.delay(200).fadeOut('slow');
  //   themeWindow.scrollTop(0);
  // });


  /*
   *---------------------------------------------
   *----------------Sticky Navbar----------------
   *---------------------------------------------
   */

  $(window).scroll(function(){

    if ($(window).width() > 768) {

      if ($(this).scrollTop()>100){
        $('#main-navbar').addClass('fixed-navbar');
        $('#top-toolbar').css('display','none');
      } 
      else {
        $('#main-navbar').removeClass('fixed-navbar');
        $('#top-toolbar').css('display','block');
      }
    }
  });


  /*
   *---------------------------------------------
   *----------------MagnificPopup----------------
   *---------------------------------------------
   */

  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
    
  });



  /*
   *---------------------------------------------
   *----------OwlCarousel/Popular Brand----------
   *---------------------------------------------
   */

  var pbrand = $("#owl-brand");
  pbrand.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    items: 5,
    loop: true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });


  /*
   * -----------------------------------------------------------------
   *--------------------Back To Top------------------
   * -----------------------------------------------------------------
   */

  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });

  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  })



});
