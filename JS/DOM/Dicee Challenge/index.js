// create a random number, between 1-6, 
// math.random - generate number between 0-1
// multiply by 6 to get between 0 and 5.9999
// Math.floor - round down to nearest whole number
// +1 to ensure we're getting numbers between 1 - 6
var randomNumber1 = Math.floor(Math.random()*6) +1;  //4 - 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png <-> dice6.png
var randomImageSource = "images/" + randomDiceImage; // create dynamic img src
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);;

// If plyaer 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}
