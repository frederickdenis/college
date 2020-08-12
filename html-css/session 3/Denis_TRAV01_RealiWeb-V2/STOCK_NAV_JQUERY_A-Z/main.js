/* jslint sloppy: true */

/* iif */
(function ($) {
    
    // 
    $.creationLiensMenu = function () {
        
        /*  1. 
        *   Construction des liens du menu de navigation
        *   en fonction de la hiérarchie des 'dt', 
        *   des 'h3' et de leur 'data-title'.
        */
        $(document).find("h3").each(function (index, element) {
           
            // Plusieurs console.log() utiles...
            //console.log(index + " | " + element);
            console.log($(this).attr("data-title"));
            console.log($(this).offset().top.toFixed(0));
            //console.log($("header").height());
            //console.log($(this).scrollTop());
            console.log("-----------------");

            // A. 
            // Le lien est créé ici à chaque itération
            var $lien = $("<li><a href=\"#" + $(this).closest("dt").attr("id") + "\">" + $(this).attr("data-title") + "</a></li>");

            // B. 
            // L'action du clic sur le lien doit engendrer 
            // une animation jusqu'à l'id du titre (dt)
            $lien.find("a").smoothScroll();
            
            // C.
            // Le lien construit est ajouté dans la 'nav'.
            $("nav").append($lien);
        });

      
        // 2. Ajout d'un titre et de son icône
        $("nav").prepend("<h3><i class=\"fas fa-sort-alpha-down\"></i> Navigation</h3>");
      
    };


    /**
    *   Cliquer sur le lien déclenche l'animation jusqu'à sa destination.
    */
    $.fn.smoothScroll = function () {
    
        this.click(function (event) {
            event.preventDefault();
          
            var id = $(this).attr("href");
          
            $('html, body').animate({
                scrollTop: $(id).offset().top - 65
            }, 'slow');
          
            return false;
        });
    };

}(jQuery));



$(document).ready(function (e) {

    // 1. Menu de navigation
    $.creationLiensMenu();
  

    // 2. Flèche de retour vers le haut
    $('#versLeHaut a').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
      
        return false;
    });

  
    // 3. Gestion du scroll
    $(window).scroll(function () {
        
        // console.log($(this).scrollTop());
      
        // Lorsque l'on scroll au delà du header 
        if ($(this).scrollTop() > $("header").height() - 60) 
        {
            // On fait apparaître la flèche
            $('#versLeHaut:hidden').stop(true, true).fadeIn();
          
            // On réduit l'entête
            $("h1").removeClass("entete-grand").addClass("entete-petit");

        } else {
          
            // On fait disparaître la flèche
            $('#versLeHaut').stop(true, false).fadeOut("fast");
            
            // On agrandi l'entête
            $("h1").removeClass("entete-petit").addClass("entete-grand");

        }
    });
});
