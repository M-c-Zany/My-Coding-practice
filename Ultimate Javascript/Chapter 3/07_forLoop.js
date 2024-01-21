// Initialize the sum variable to store the cumulative sum of natural numbers
let sum = 0;

// Prompt the user to enter the value of 'n' and convert it to an integer
let n = prompt("Enter the value of n");
n = Number.parseInt(n);

// Loop through natural numbers starting from 1 up to 'n'
for (let i = 0; i < n; i++) {
  // Uncomment the line below to see the iteration index in the console
  // console.log(i);

  // Add the current natural number (i + 1) to the sum
  sum += i + 1;

  // Uncomment the line below to see each addition operation in the console
  // console.log(i + 1, "+");
}

// Display the sum of the first 'n' natural numbers in the console
console.log("Sum of the first " + n + " natural numbers is " + sum);

/*
Explanation:
1. sum: Initialize a variable `sum` to store the cumulative sum of natural numbers.
2. n: Prompt the user to enter the value of 'n' and convert it to an integer using `Number.parseInt()`.
3. for loop: Iterate through natural numbers from 1 to 'n'. The loop variable `i` starts from 0 and goes up to `n-1`.
4. sum += i + 1: Add the current natural number (i + 1) to the sum. This line calculates the cumulative sum.
5. console.log("Sum..."): Display the result in the console, showing the sum of the first 'n' natural numbers. The message includes the value of 'n' and the calculated sum.
6. Commented lines: There are commented lines that you can uncomment if you want to see the iteration index or the individual addition operations in the console.
*/
