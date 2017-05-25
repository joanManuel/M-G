//$ = jQuery.noConflict();
/*

,"opacity":"1","top":"0"

*/
//MENU MOVIL


$(document).ready(function(){
    var ancho = $(window).width();    
    var point = 992;
    
    if(ancho >= point){
        $('.post-slide').mouseenter(function(){
        $('.post-content',this).animate({
          height: '280px'
        });
        $('.efectoNoticias', this).css({"display":"block"});
        $('.efectoNoticias', this).animate({
            opacity:'1'      
    });
    }).mouseleave(function(){
        $('.efectoNoticias', this).css({"display":"none","opacity":"0"});
        $('.efectoNoticias', this).animate({
             opacity:'0' 
        });
        $('.post-content',this).animate({
          height: '110px'
        });
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

