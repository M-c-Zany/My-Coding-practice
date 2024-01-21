// Display a message about operators in JavaScript
console.log("Operators in JavaScript");

// Arithmetic Operators
let a = 10;
let b = 4;
console.log("a + b = ", a + b); // Output: 14
console.log("a - b = ", a - b); // Output: 6
console.log("a / b = ", a / b); // Output: 2.5
console.log("a ** b = ", a ** b); // Output: 10000
console.log("a % b = ", a % b); // Output: 2
console.log("++a = ", ++a); // Output: 11
console.log("a++ = ", a++); // Output: 11
console.log("--a = ", --a); // Output: 10
console.log("a-- = ", a--); // Output: 10
console.log("a = ", a); // Output: 9
console.log("a-- = ", a--); // Output: 9

// Assignment Operators
let assignment = 1;
assignment += 5; // same as assignment = assignment + 5
console.log("assignment is now = ", assignment); // Output: 6
assignment -= 5; // same as assignment = assignment - 5
console.log("assignment is now = ", assignment); // Output: 1
assignment *= 5; // same as assignment = assignment * 5
console.log("assignment is now = ", assignment); // Output: 5
assignment /= 5; // same as assignment = assignment / 5
console.log("assignment is now = ", assignment); // Output: 1

// Comparison Operators
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2); // Output: false
console.log("comp1 != comp2 is ", comp1 != comp2); // Output: true
console.log("comp1 === comp2 is ", comp1 === comp2); // Output: false
console.log("comp1 !== comp2 is ", comp1 !== comp2); // Output: true
console.log("comp1 > comp2 is ", comp1 > comp2); // Output: false

// Logical Operators
let x = 5;
let y = 6;
console.log(x < y && x == 5); // Output: true
console.log(x > y || x == 5); // Output: true
console.log(!false); // Output: true
console.log(!true); // Output: false
