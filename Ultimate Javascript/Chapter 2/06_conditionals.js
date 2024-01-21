// Prompt the user to input their age and store it in variable 'a'
let a = prompt("Hey, what's your age?");
a = Number.parseInt(a); // Converting the user input from a string to a number

// Check various conditions based on the user's age and display corresponding messages
if (a < 0) {
  alert("This is an invalid age");
} else if (a < 9) {
  alert("You are a kid and you cannot even think of driving");
} else if (a < 18 && a >= 9) {
  alert("You are a kid and you can think of driving after 18");
} else {
  alert("You can now drive as you are above 18");
}

// Output a message to the console indicating that the code execution is complete
console.log("Done");

// HomeWork - Explore switch statement and write a basic program in the comments

// Output a message to the console based on whether the user can drive or not
console.log("You can", (a < 18 ? "not drive" : "drive"));
 