//$ = jQuery.noConflict();

//MENU MOVIL
$(document).ready(function(){
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

