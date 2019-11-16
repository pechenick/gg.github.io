//$(function() {
//    let header = $("#header");
//    let advantages = $("#advantages");
//    let advantagesH = advantages.innerHeight();
//    let scrollPos = $(window).scrollTop();
//    
//    $(window).on("scroll load resize", function(){
//        scrollPos = $(this).scrollTop();
//        
//        if( scrollPos > advantagesH) {
//            header.addClass("fixed");
//        } else {
//            header.removeClass("fixed");
//        }
//    });
//    
//    
//    
//});




$(function() {
    let navToggle = $("#navToggle")
    let nav = $("#nav")
    
    navToggle.on("click", function(event){
        event.preventDefault();
        
        navToggle.toggleClass("nav__active");
        
        nav.toggleClass("menu-active");
        
    })
    
});

    