/* 1. Conditional Statements:

`if` Statement: */

let condition = true;

if (condition) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// Example 2
let temperature = 35;

if (temperature > 40) {
  console.log("It's a very hot");
} else {
  console.log("It's a normal");
}

/* `else if` Statement: */

let num = 0;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Example 2

let temperature01 = 20;

if (temperature01 >= 40) {
  console.log("It's very hot");
} else if (temperature01 <= 20) {
  console.log("It's cool");
} else {
  console.log("It's normal");
}

/*Switch Statement: */

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  default:
    console.log("It's another day");
}

/*2. Loops:

`for` Loop: */

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Example:2
for (let i = 10; i < 15; i++) {
  console.log(i);
}

/* `while` Loop: */

let counter = 0;

while (counter < 5) {
  console.log(counter);
  counter++;
}

/* `do-while` Loop: */

let count = 0;

do {
  console.log(count);
  count++;
} while (count < 5);

/*Looping Through Arrays: */

let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/*3. Examples Combining Conditions and Loops:

Filtering Odd Numbers: */

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/*Finding Prime Numbers: */

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

for (let i = 1; i <= 10; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

/*Nested Loops: */

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`(${i}, ${j})`);
  }
}
