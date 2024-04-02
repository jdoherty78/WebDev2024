var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// detect when keybord key pressed, call nextSequence()
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// use jquery to detect when any of the buttons are clicked and trigger a handler function
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");  //store id of button that got clicked
  userClickedPattern.push(userChosenColour);  // add contents of variable userChosenColour to end of userClickedPattern  
  //console.log(userClickedPattern);
  playSound(userChosenColour);  // when button clicked, play corresponding sound
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSequence();
        }, 1000);
      }
    } else {
        playSound("wrong"); // play wrong.mp3 if wrong answer
        $("body").addClass("game-over"); // apply class game-over from css when wrong answer
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function() {
          $("body").removeClass("game-over");
        }, 200);
      
      startOver();
    }
  }

function nextSequence() {
    userClickedPattern = [];
    level++; // increase the level by 1 evertime nextSequence() called

    $("#level-title").text("Level " + level); // update h1 with change in level

    var randomNumber = Math.floor(Math.random() * 4); //create ranomd number between 0 - 3
    var randomChosenColour = buttonColours[randomNumber]; //select random color from array
    gamePattern.push("randomChosenColour"); // add colour to array

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); //select button with same id as randomChosenColour, animate that bad boy
    playSound(randomChosenColour);
};


function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed"); // add css pressed class to button
    setTimeout(function () {   // remove pressed class after 100 miliseconds
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}