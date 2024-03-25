// Behavior Attributes

alert("Working!");

// check if JQuery library is ready
//once the library is ready, the callback function gets called
//the <script> tags can then be placed between <head></head>
//otherwise the (document).ready isn't required
$(document).ready(function() {
    $("h1").css("color", "red");
});
