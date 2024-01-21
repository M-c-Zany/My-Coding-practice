  let a = 1;
  let b = 2;
  let c = 3;

  function onePlusAvg(x, y) {
    return 1 + (x + y) / 2;
  }
  
  console.log("One plus Average of a and b is ", onePlusAvg(a, b));
  console.log("One plus Average of b and c is ", onePlusAvg(b, c));
  console.log("One plus Average of a and c is ", onePlusAvg(a, c));
  
  console.log(sum(9, 7)); // Output: 16
  
  console.log("The average of a and b is ", (a + b) / 2);
  console.log("The average of b and a is ", (b + a) / 2);
  console.log("The average of c and a is ", (c + a) / 2);
  
  function average(x, y) {
    console.log("done");
    return (x + y) / 2;
  }
  
  console.log("The average of a and b is ", average(a, b));
  console.log("The average of b and a is ", average(b, a));
  console.log("The average of c and a is ", average(c, a));
  
  function OnePlusAvg(x, y) {
    return Math.round(1 + (x + y) / 2);
  }
  
  console.log("One plus average of a and b is ", OnePlusAvg(a, b));
  console.log("One plus average of b and c is ", OnePlusAvg(b, c));
  console.log("One plus average of a and c is ", OnePlusAvg(a, c));
  
//   1. Basic Function:
  
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("John");
  // Output: Hello, John!
  
 /* This is a simple function named `greet` that takes a parameter `name` and logs a greeting to the console.*/
  
//   2. Function with Return Value:
  
  function square(number) {
    return number * number;
  }
  
  let result = square(5);
  console.log(result);
  // Output: 25
  
  /*The `square` function calculates the square of a number and returns the result. The returned value is stored in the `result` variable and then logged to the console.*/
  
//   3. Anonymous Function (Function Expression):
  
  let add = function (a, b) {
    return a + b;
  };
  
  console.log(add(3, 4));
  // Output: 7
  
  /*Here, an anonymous function is assigned to the variable `add`. It takes two parameters and returns their sum. This is called a function expression.*/
  
//   4. Arrow Function:
  
  const multiply = (x, y) => x * y;
  
  console.log(multiply(2, 3));
  // Output: 6
  
  /*Arrow functions provide a concise syntax for defining functions. Here, `multiply` is a function that takes two parameters and returns their product.*/
  
//   5. Default Parameters:
  
  function power(base, exponent = 2) {
    return Math.pow(base, exponent);
  }
  
  console.log(power(3));
  // Output: 9
  console.log(power(2, 4));
  // Output: 16
  
  /*The `power` function has a default parameter (`exponent` is set to 2 by default). If an exponent is not provided, it defaults to 2.*/
  
//   6. Rest Parameter:
  
  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5));
  // Output: 15
  
  /*The `sum` function uses the rest parameter (`...numbers`) to accept any number of arguments. It then calculates and returns their sum.*/
  
//   7. Callback Function:
  function fetchData(callback) {
    // Simulating asynchronous data fetching
    setTimeout(() => {
      const data = "Fetched data";
      callback(data);
    }, 1000);
  }
  
  fetchData(result => {
    console.log(result);
  });
  // Output (after 1 second): Fetched data
  
  /*The `fetchData` function simulates an asynchronous operation and takes a callback function as a parameter. When the data is fetched, the callback is invoked. */
  
  