/* BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."



The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge. 
*/

var weight  = 65;
var height  = 1.8;
console.log(interpretation);

function bmiCalculator (weight, height) {
  var bmi = Math.round(weight / (height * height));
  var interpretation = "";

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  }   else if (bmi > 18.5 ** bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else if (bmi > 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  } else {
    interpretation = "Invalid";
  }
    return interpretation;
}


