function fibonacciGenerator(num) {

    var output = [];

    if (num === 1) {
      output= [0]; 
    } 
    else if (num === 2) {
      output = [0,1];
    } 
    else {
      output = [0,1];
    
      for (var i=2; i < num; i++) {
        output.push(output[output.length - 2] + output[output.length - 1]);
        }  
    }
        return output;
    }
  
    output = fibonacciGenerator(9);
    console.log(output);