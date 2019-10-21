$(function () {
//      let burger = $("burger");

      let header = $("#header");
      let headerInner = $("#headerInner");
      let hero = $("#hero");
      let heroH = hero.innerHeight();
      let scrollPos = $(window).scrollTop();


      // $(window).on("scroll load resize", function(){
      //     heroH  = hero.innerHeight();
      //     scrollPos = $(this).scrollTop();
      //
      //     if( scrollPos > heroH) {
      //         header.addClass("fixed");
      //     } else {
      //         header.removeClass("fixed");
      //     }
      // });

      $("[data-scroll]").on("click", function(event) {
          event.preventDefault();

          let elementId = $(this).data('scroll');
          let elementOffset = $(elementId).offset().top;

          $("html, body").animate({
              scrollTop: elementOffset
          }, 700);

          let menuItem = $("#menuItem");
          let menuLink = $("#menuLink");

          $("html, body").on("click", function(event){
              if(menuLink.click){
                  menuItem.addClass("menu__item-active");
          } else {
            menuItem.removeClass("menu__item-active");
          }
      });
      });

}());
