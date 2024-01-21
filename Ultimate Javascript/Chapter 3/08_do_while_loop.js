// Prompt the user to enter a number and parse it to an integer
let n = prompt("Enter the value of n");
n = Number.parseInt(n);

// Initialize a variable to start from 10
let i = 10;

// Use a do-while loop to print numbers from 10 to n-1
do {
  // Output the current value of i to the console
  console.log(i);

  // Increment i to move to the next number
  i++;
} while (i < n);
