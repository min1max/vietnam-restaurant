require('./scss/style.scss');

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

var owlCarousel = require('owl.carousel');




$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    //center: true,
    items: 1.3,
    loop:true,
    autoplay: true,
    //stagePadding: 50,
    nav:false,
    dots: false,
    //autoWidth:true,
    margin:5/*,
    responsive:{
        600:{
            items:2
        }
    } */ 	
  });

  $('.gall').owlCarousel({
    items: 1,
    center: true,
    nav:false,
    loop:true,
    autoplay: true,
    margin:0
  });



$('a[href^="#"]').click(function(){

    var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 'slow');

    return false;
});

  
});


