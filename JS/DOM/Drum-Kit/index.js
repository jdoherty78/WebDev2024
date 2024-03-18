// Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// show alert when any button clicked with css class .drum
//for (var i = 0; i < numberOfDrumButtons; i++) {
//    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//    alert("I got Clicked!");
//    });    
//}


// play a sound, on eventListener
//for (var i = 0; i < numberOfDrumButtons; i++) {
//  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//        var audio = new Audio("sounds/tom-1.mp3");    
//        audio.play();
//    });
//}


for (var i = 0; i < numberOfDrumButtons; i++) {
    
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        //this.style.color = "white";
        var buttonInnerHTML = this.innerHTML;    

        makeSound(buttonInnerHTML);  // for the keyboard event

        

    });
}    


// Detecting keyboard press

// keyboard response

//addEventListener("keydown", function() {alert("Key was pressed!");});


// let's find out what "event" is happening 
// it will console.log the keyboard event that triggers the eventListener
document.addEventListener("keydown", function(event){
  //console.log(event);
  makeSound(event.key);
});

function makeSound(key) {
    switch (key) {

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");    
            tom1.play();
          break;

          case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");    
            tom2.play();
          break;                

          case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");    
            tom3.play();
          break;                   

          case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");    
            tom4.play();
          break; 

          case "j":
            var snare = new Audio("sounds/snare.mp3");    
            snare.play();
          break; 

          case "k":
            var crash = new Audio("sounds/crash.mp3");    
            crash.play();
          break; 

          case "l":
            var kick = new Audio("sounds/kick-bass.mp3");    
            kick.play();
          break;               


        default: console.log(buttonInnerHTML);
            break;
    }

}

