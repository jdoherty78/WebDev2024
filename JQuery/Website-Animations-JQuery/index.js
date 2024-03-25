//Behavior
// change h1 text to purple, when clicking 1 of the buttons, using JQuery
$('button').click(function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

// $("h1").hide();  -- hide ze element, everything moves up
// $("h1").show();  -- to revert
// $("h1").toggle(); -- go back and forth
// $("h1").fadeOut();  -- or fadeIn();
// $("h1").fadeToggle();
// $("h1").slideUp();  -- slideDown(); -- slideToggle();

// $("h1").animate({opacity: 0.5});  -- define custom css
// can only add css values with a numeric value between the {} curly braces
// $("h1").animate({margin: "20%"});

// $("h1").slideUp().slideDown().animate({opacity: 0.5});
// will perform the operations in order..      
// google - jquery animate slide 


