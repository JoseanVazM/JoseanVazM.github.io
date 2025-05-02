(function($) {

  "use strict";

  /*
  |--------------------------------------------------------------------------
  | Template Name: Trimrline
  | Author: AwesomeThemez
  | Developer: Tamjid Bin Murtoza
  | Version: 1.0.0
  |--------------------------------------------------------------------------
  |--------------------------------------------------------------------------
  | TABLE OF CONTENTS:
  |--------------------------------------------------------------------------
  |
  | 1. Scripts initialization
  | 2. Preloader
  | 3. Primary Menu
  | 4. Scroll Function
  | 5. Section Active and Scrolling Animation
  | 6. Scroll Up
  | 7. Owl Carousel
  | 8. Light Gallery
  | 9. Ajax Contact Form And Appointment
  |
  */

  /*--------------------------------------------------------------
    1. Scripts initialization
  --------------------------------------------------------------*/

  $(window).on('load', function() {
    $(window).trigger("scroll");
    $(window).trigger("resize");
    preloaderSetup();
  });


  $(document).ready(function() {
    $(window).trigger("resize");
    primaryMenuSetup();
    mobileMenu();
    scrollAnimation();
    sectionActive();
    scrollUp();
    owlCarouselSetup();
    lightGallery();
    contactForm();
    $('html,body').smoothScroll();
    $('.at-parallax').parallax("50%", 0.3);

    // Custom Parallax Footer
    var footerHeight = ($('.at-site-footer').height()) + 'px';
    var test = $('.at-site-footer').height();
    $('.at-cotent').css("margin-bottom", footerHeight);


    // Data images
    //----------------------------------
    $('.at-bg').each(function() {
      var src = $(this).attr('data-src');
      $(this).css({
        'background-image': 'url(' + src + ')'
      });
    });

  });


  $(window).on('resize', function() {
    mobileMenu();
  });


  $(window).on('scroll', function() {
    scrollFunction();
  });


  /*--------------------------------------------------------------
    2. Preloader
  --------------------------------------------------------------*/

  function preloaderSetup() {

    $(".at-preloader-dots").fadeOut();
    $("#at-preloader").delay(150).fadeOut("slow");

  }


  /*--------------------------------------------------------------
    3. Primary Menu
  --------------------------------------------------------------*/

  function primaryMenuSetup() {

    $(".primary-nav-list").before("<div class='m-menu-btn'><span></span></div>");

    $(".m-menu-btn").on('click', function() {
      $(this).toggleClass("m-menu-btn-ext");
      $(this).siblings('.primary-nav-list').slideToggle("slow");
    });

    $(".menu-item-has-children > ul").before("<i class='fa fa-plus m-dropdown'></i>");

    $('.m-dropdown').on('click', function() {
      $(this).siblings('ul').slideToggle("slow");
      $(this).toggleClass("fa-plus fa-minus")
    });

  }


  function mobileMenu() {

    if ($(window).width() <= 991) {
      $('.primary-nav').addClass('m-menu').removeClass('primary-nav');
    } else {
      $('.m-menu').addClass('primary-nav').removeClass('m-menu');
    }

  }


  /*--------------------------------------------------------------
    4. Scroll Function
  --------------------------------------------------------------*/

  function scrollFunction() {

    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      $(".site-header").addClass("small-height");
    } else {
      $(".site-header").removeClass("small-height");
    }

    // For Scroll Up
    if (scroll >= 350) {
      $(".scrollup").addClass("scrollup-show");
    } else {
      $(".scrollup").removeClass("scrollup-show");
    }

  }


  /*--------------------------------------------------------------
    5. Section Active and Scrolling Animation
  --------------------------------------------------------------*/

  function scrollAnimation() {

    $('.site-header a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 15)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
    });

  }

  function sectionActive() {

    $('body').scrollspy({
      target: '.site-header',
      offset: 70
    });
  }


  /*--------------------------------------------------------------
    6. Scroll Up
  --------------------------------------------------------------*/

  function scrollUp() {

    $("body").append("<span class='scrollup'></span>");

    $('.scrollup').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });

  }


  /*--------------------------------------------------------------
    7. Owl Carousel
  --------------------------------------------------------------*/

  function owlCarouselSetup() {

    /* Owl Carousel For Gallery */
    $('.at-gallery-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3500,
      smartSpeed: 800,
      nav: false,
      navText: ['<i class="fa fa-long-arrow-up"></i>', '<i class="fa fa-long-arrow-down"></i>'],
      dots: true
    });

    /* Owl Carousel For Testimonial */
    $('.at-testimonials').owlCarousel({
      items: 1,
      animateOut: 'bounceOutRight',
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 1000,
      nav: false,
      dots: true
    });

    /* Owl Carousel For Service */
    $('.at-service-carousel1').owlCarousel({
      loop: true,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: true,
      autoplay: false,
      autoplayTimeout: 6000,
      smartSpeed: 1000,
      margin: 15,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    /* Owl Carousel For Service */
    $('.at-service-carousel2').owlCarousel({
      loop: true,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: true,
      autoplay: false,
      autoplayTimeout: 6000,
      smartSpeed: 1000,
      margin: 30,
      responsive: {
        0: {
          items: 1
        },
        991: {
          items: 2
        }
      }
    });

  }


  /*--------------------------------------------------------------
    8. Light Gallery
  --------------------------------------------------------------*/

  function lightGallery() {

    var gridblock_lightbox = $('.lightgallery');
    gridblock_lightbox.each(function() {
      $(this).lightGallery({
        mode: 'lg-slide',
        selector: '.lightbox-item',
        addClass: 'custom-lightbox',
        loop: false,
        thumbnail: false,
        pager: false,
        speed: 400,
        scale: 1,
        keypress: true,
      });
    });
  }

  /*--------------------------------------------------------------
    9. Ajax Contact Form And Appointment
  --------------------------------------------------------------*/
  // Contact Form
  function contactForm() {

    $('#at-alert').hide();
    $('#contact-form #submit').on('click', function() {
      var name = $('#name').val();
      var address = $('#address').val();
      var phone = $('#phone').val();
      var email = $('#email').val();
      var msg = $('#msg').val();
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!regex.test(email)) {
        $('#at-alert').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please Enter Valid Email.</div>');
        return false;
      }

      name = $.trim(name);
      address = $.trim(address);
      phone = $.trim(phone);
      email = $.trim(email);
      msg = $.trim(msg);

      if (name != '' && email != '' && msg != '') {
        var values = "name=" + name +
          "&address=" + address +
          "&phone=" + phone +
          "&email=" + email +
          "&msg=" + msg;
        $.ajax({
          type: "POST",
          url: "assets/php/mail.php",
          data: values,
          success: function() {
            $('#name').val('');
            $('#address').val('');
            $('#phone').val('');
            $('#email').val('');
            $('#msg').val('');

            $('#at-alert').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
            setTimeout(function() {
              $('#at-alert').fadeOut('slow');
            }, 4000);
          }
        });
      } else {
        $('#at-alert').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> All fields are required.</div>');
      }
      return false;
    });

  }



})(jQuery); // End of use strict
