// prompt guest for name
// check name against guestList
// if it exists, send alert saying welcom
// if not, say sorry, maybe next time

/*
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
  alert("Welcom!");
} else {
  alert("Sorry, maybe next time.");
}
*/




var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = "Joe";

if (guestList.includes(guestName)) {
    console.log("Welcome!");
} else {
    console.log("Sorry, maybe next time.");
}