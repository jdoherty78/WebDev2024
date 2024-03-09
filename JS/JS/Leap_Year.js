// normal years has 365 days, leap years 366 days
//on every year that is evenly divisible by 4
//except every year that is evenly divisible by 100
//unless the year is also evenly divisible by 400

//else.g. 200 / 4 = 500 leap year
//

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }      
    } else {
        return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}
  

console.log(isLeap(1947))  