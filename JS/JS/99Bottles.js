/* use while loop to print lyrics to song 99 bottles of beer...
https://www.99-bottles-of-beer.net/lyrics.html

72 bottles of beer on the wall, 72 bottles of beer. Take 1 down, pass it around, 71 bottles of beer on the wall.
71 bottles of beer on the wall, 71 bottles of beer. Take 1 down, pass it around, 70 bottles of beer on the wall.


1 bottle ofbeer on the wall, 1 bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer. Got ot the store and buy some more, 99 bottles of beer on the wall.
*/


var count = 99;
var bottles= 99;
var bottlesTwo = 98;

function beer(){


    while (count>0){
        console.log(count + " bottles of beer on the wall," + bottles +" bottles of beer. Take one down and pass it around, " + bottlesTwo + " bottles of beer on the wall.")
    count--;
    bottles--;
    bottlesTwo--;

    }
    
  
    
console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")

}

 beer();
