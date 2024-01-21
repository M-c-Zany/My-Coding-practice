
// Prompt the user to enter a number and parse it to an integer
let userInput = prompt("Enter a number: ");
let n = Number.parseInt(userInput);

// Initialize a variable to iterate through the numbers
let i = 0;

// Use a while loop to print numbers from 0 to n-1
while (i < n) {
  // Output the current value of i to the console
  console.log(i);

  // Increment i to move to the next number
  i++;
}

/*
Explanation:
1. User Input:
   - `let userInput = prompt("Enter a number: ");`: Prompts the user to enter a number and stores the input in the variable `userInput`.
2. Parsing Input:
   - `let n = Number.parseInt(userInput);`: Converts the user input (which is initially a string) into an integer using `parseInt()` and stores it in the variable `n`.
3. Loop Initialization:
   - `let i = 0;`: Initializes a variable `i` to 0. This variable will be used to iterate through the numbers.
4. While Loop:
   - `while (i < n) {`: Starts a while loop that continues as long as `i` is less than the user-entered number `n`.
5. Console Output:
   - `console.log(i);`: Outputs the current value of `i` to the console.
6. Increment:
   - `i++;`: Increments the value of `i` by 1 in each iteration, moving to the next number.
*/