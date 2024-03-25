// Behavior Attributes

//$("h1").text("Bye!");
//$("h1").addClass("big-title margin-50");
//console.log($("img").attr("src"));

//$("a").attr("href", "https://www.yahoo.com");

$("h1").addClass("big-title margin-50");

$("h1").click(function () {
  $("h1").css("color", "purple");  // on clicking h1, change color to purple
});


// change h1 text to purple, when clicking 1 of the buttons , using js
/*
for (var i = 0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color="purple";
    });
}
*/

// change h1 text to purple, when clicking 1 of the buttons, using JQuery
$('button').click(function() {
  $("h1").css("color", "blue");    
});


// logs keypress to console.log, when cursor in input box
//$("input").keydown(function(event) {
//  console.log(event.key);
//});

// challenge, anytime a keypress is done within the web page
// change the h1 text to the key pressed
$(document).keydown(function(event) {
    $("h1").text(event.key);
  });
  

// more flexible way to add an eventListener
$("h1").on("mouseover", function() {
  $("h1").css("color", "green");
});

// can listen for any event ie. click, 