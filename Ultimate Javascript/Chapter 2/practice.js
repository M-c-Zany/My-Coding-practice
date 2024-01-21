// Problem no 1
// Ask the user for their age
let age = prompt("What is your age?");
age = Number.parseInt(age);

// Check if the age is between 10 and 20 (inclusive)
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20");
} else {
  console.log("Your age doesn't lie between 10 and 20");
}

// Problem no 2
// Ask the user for their age
let age2 = prompt("What is your age?");
age2 = Number.parseInt(age2);

// Use a switch statement to display a message based on the age
switch (age2) {
  case 12:
    console.log("Your Age Is 12");
    break;
  case 13:
    console.log("Your Age Is 13");
    break;
  case 14:
    console.log("Your Age Is 14");
    break;
  case 15:
    console.log("Your Age Is 15");
    break;
  case 16:
    console.log("Your Age Is 16");
    break;
  default:
    console.log("Your Age Is Not Special");
}

// Problem no 3
// Ask the user for a number
let num = prompt("Enter a number");
num = Number.parseInt(num);

// Check if the number is divisible by 2 and 3
if (num % 2 === 0 && num % 3 === 0) {
  console.log("Your Number Is Divisible By 2 And 3");
} else {
  console.log("Your Number Is Not Divisible By 2 And 3");
}

// Problem no 4
// Ask the user for their age
let age4 = prompt("Enter Your age");
age4 = Number.parseInt(age4);

// Use a ternary operator to determine if the user can drive
let canDrive = age4 > 18 ? "You Can Drive" : "You Cannot Drive";
console.log(canDrive);
