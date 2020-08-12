$(document).ready(function($) {  

  // 1.
  $('.animated').appear();

  //  $('header h1').addClass("tada visible");
  // $('header').addClass("visible"); //bounceInDown
  
  
  // 2.
  $('.animated').on('appear', function() {
    var elem = $(this);
    var animation = elem.data('animation');

    if (!elem.hasClass('visible')) {
      var animationDelay = elem.data('animation-delay');

      if (animationDelay) {
        window.setTimeout(function() {
          elem.addClass(animation + " visible");
        }, animationDelay);
      } else {
        elem.addClass(animation + " visible");
      }
    }
  });

  
  // 3a.
  $("#membre").on("click", function() {
    animate("#ico-facebook", 'bounce');
    return false;
  });

  // 3b.
  function animate(element_ID, animation) {
    // @added | xm : Enlevé la classe d'animation originale.
      $(element_ID).removeClass("fadeInLeft");

      $(element_ID).addClass(animation);
        var wait = window.setTimeout( function(){
          $(element_ID).removeClass(animation)}, 1300
      );
   }
  
});