// Problem: 1 // Iterate over the keys (student names) in the students_marks object using a for...in loop
let students_marks = {
  Thiru: 99,
  Lokesh: 100,
  Zany: 35,
  Ram: 98,
};

// Get an array of the object keys (student names)
let studentNames = Object.keys(students_marks);
// Iterate over the array using a plain for loop
for (let i = 0; i < studentNames.length; i++) {
  // Get the current student name
  let studentName = studentNames[i];
  // Log a message to the console displaying the student's name and their corresponding marks
  console.log("Marks of " + studentName + " is " + students_marks[studentName]);
}

// Problem 2: Define an object named students_marks with students' names as keys and their corresponding marks as values
for (let studentName in students_marks) {
  // Log a message to the console displaying the student's name and their corresponding marks
  console.log("Marks of " + studentName + " is " + students_marks[studentName]);
}

// Problem 3: Guess the correct number
// The correct number to guess
const correct_number = 143;
// Initialize the variable to store user input
let user_input;
// Continue prompting the user until they enter the correct number
while (user_input !== correct_number) {
  // Provide feedback to the user to try again
  console.log("Try again");
  // Prompt the user to enter their number
  user_input = prompt("Enter your number");
}
// Display a message when the correct number is entered
console.log("You have entered the correct number");

// Problem 4: Calculate the mean of four numbers
// Define a function 'mean' that takes four parameters (a, b, c, d)
const mean = (a, b, c, d) => {
    // Calculate the mean by summing the four numbers and dividing by 4
    return (a + b + c + d) / 4;
}
// Call the 'mean' function with the values 1, 2, 3, and 4
mean(1, 2, 3, 4);
let correct_name = ""