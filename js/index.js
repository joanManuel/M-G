//$ = jQuery.noConflict();
/*

,"opacity":"1","top":"0"

*/
//EFECTO FONDO
$(window).scroll(function(){

	var posY = window.pageYOffset;
    var top = '0px ';
    var ancho1 = $(window).width(); 
    var point2 = 1440;
    
 if(ancho1 >= point2){
     $("body").css({"background-position": top.concat(113 - (posY/1) + "px")});
 }
      
   
});


//EFECTO NOTICIAS
$(document).ready(function(){
    var ancho = $(window).width();    
    var point = 992;
    
    if(ancho >= point){
        $('.post-slide').mouseenter(function(){
        
        $('.post-content',this).animate({
          height: '100%'
        });
        $('.post-content', this).css({"maxheight":"290px"});
        
        $('.efectoNoticias', this).css({"display":"block"});
        
        $('.read-more',this).css({"position":"relative","margin-bottom":"2%"});    
        
        $('.efectoNoticias', this).animate({
            opacity:'1'      
        });
    }).mouseleave(function(){
        
        
        $('.efectoNoticias', this).animate({
             opacity:'0' 
        });
        $('.post-content',this).animate({
          height: '140px'
        });
            $('.efectoNoticias', this).css({"display":"none","opacity":"0"});
            $('.read-more',this).css({"position":"absolute","bottom":"4%"}); 
    });
    
    }
    
   $('.mobile-menu a').on("click",function(e){
        e.preventDefault();
        $('.navegacion').toggle('slow'); 
     
   });
    
    $('.muniOn').on("click",function(e){
        e.preventDefault();
        $('.subm').toggle('slow'); 
   });
    $('.quieOn').on("click",function(e){
        e.preventDefault();
        $('.subm-2').toggle('slow');
   });
    $('.gereOn').on("click",function(e){
        e.preventDefault();
        $('.subm-3').toggle('slow');
   });
        /*
    var breakpoint = 768;
    $(window).resize(function(){
    if($(document).width() >= breakpoint){
        $('.navegacion').show();

    }else {
        $('.navegacion').hide();
    }   
    });*/
        
});

