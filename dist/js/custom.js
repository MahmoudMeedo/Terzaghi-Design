$(function() {
  'use strict';

  // Remove Loading Overpage
  $(window).on("load", function() {
    $(".overpage").fadeOut(1000);
  });

  /* Up To Header Button Functions */
  // Define The Variables
  var scrollTopBtn = $('.scroll-top');

  // Make Up To Header Button Visible 
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {
      scrollTopBtn.css('right', '20px');
    } else {
      scrollTopBtn.css('right', '-60px');
    }
  });

  // Make Up To Header Button Navigate To Top
  scrollTopBtn.on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
  });

  // Trigger To Occupatuins Button
  $('.to-occupations').on("click", function() {
    $('html, body').animate({
      scrollTop: $('.' + $(this).data('target')).offset().top - 50
    }, 1000);
  });

  // Trigger To Occupatuins Button
  $('.see-projects').on("click", function() {
    $('html, body').animate({
      scrollTop: $('.' + $(this).data('target')).offset().top
    }, 1000);
  });

});



// Trigger Glider Slider
new Glider(document.querySelector('.glider'), {
  slidesToScroll: 1,
  slidesToShow: 1,
  draggable: true,
  dots: '#dots',
  scrollLock: true,
  responsive: [{
    // screens greater than >= 575px
    breakpoint: 575,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: 1,
      slidesToScroll: 1,
      itemWidth: 150,
      duration: 0.25
    }
  }, {
    // screens greater than >= 775px
    breakpoint: 775,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: 2,
      slidesToScroll: 2,
      itemWidth: 150,
      duration: 0.25
    }
  }, {
    // screens greater than >= 1024px
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      itemWidth: 150,
      duration: 0.25
    }
  }]
});