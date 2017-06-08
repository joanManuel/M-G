
//SLIDER-AVISOS
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
    arrows: false,
    autoplaySpeed: 2000,
    variableWidth:true,
   centerMode: true,
        centerPadding: '20px',
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

$(document).ready(function(){
$('#eventos-slider').slick({
    
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    variableWidth:true,
    dots:true,
    centerMode: true,
    centerPadding: '20px',
  
    
  responsive: [
  {
      breakpoint: 992,
      settings: {
        arrows: false,
          dots:true,
        centerMode: true,
          variableWidth:true,
        centerPadding: '20px',
        slidesToShow: 4
      }
    }
      ,
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
          variableWidth:true,
          dots:true,
        centerPadding: '20px',
        slidesToShow: 2
      }
    }
      ,
    {
      breakpoint: 480,
      settings: {
        arrows: false,
          dots:true,
          draggable:true,
        centerMode: true,
          variableWidth:true,
          mobileFirst:true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});
});

$(document).ready(function(){
$('#enla_exter').slick({
    
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    variableWidth:true,
    dots:true,
    centerMode: true,
  responsive: [
  {
      breakpoint: 992,
      settings: {
        arrows: false,
          dots:true,
        centerMode: true,
          variableWidth:true,
        slidesToShow: 4
      }
    }
      ,
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
          variableWidth:true,
          dots:true,
        slidesToShow: 2
      }
    }
      ,
    {
      breakpoint: 480,
      settings: {
        arrows: false,
          dots:true,
          draggable:true,
        centerMode: true,
          variableWidth:true,
          mobileFirst:true,
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