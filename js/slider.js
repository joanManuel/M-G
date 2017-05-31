
//SLIDER
$(document).ready(function(){
  
 $('.carousel').carousel({
  interval: 7000
 });
  
});

//slider noticias - #news-slider
$(document).ready(function(){
$('#news-slider').slick({
  
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,    
  
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});
});


/*

$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items:4,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],
        itemsMobile:[600,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
    });
});
*/