// In , variables are used to store and manipulate data. They act as containers that hold values, and these values can be of various types, such as numbers, strings, objects, and more. Variables are declared using the `var`, `let`, or `const` keyword, depending on the desired scope and mutability of the variable.

// 1. Declaring Variables:
// - var: 

var x = 5;

// - let: - Introduced in ECMAScript 6 (ES6) with block-scoping.

let message = "Hello, world!";

// - const: Also introduced in ES6; creates a constant variable with a value that cannot be reassigned.

const PI = 3.14;

// 2. Assigning Values:

let firstName = "John";
let age = 30;
let isStudent = false;

// 3. Updating Variable Values:

let count = 10;
count = count + 1;
console.log(count); // Output: 11

// 4. Data Types: is a loosely-typed language, meaning variables can hold values of any type:

let numberVar = 42; // Number
let stringVar = "Hello"; // String
let booleanVar = true; // Boolean
let arrayVar = [1, 2, 3]; // Array
let objectVar = { key: "value" }; // Object

// 5. Scope: Variables have different scopes depending on how they are declared.
// - Global Scope:

var globalVar = "I am global";

// - Function Scope:

function exampleFunction() {
  var localVar = "I am local";
  console.log(localVar);
}

// - Block Scope (let and const):

if (true) {
  let blockVar = "I am block-scoped";
  const constantVar = "I am also block-scoped";
  console.log(blockVar);
  console.log(constantVar);
}

// 6. Constants (declared with `const`) cannot be reassigned.

const gravity = 9.8;
// gravity = 10; // Error: Assignment to a constant variable

// 7. Hoisting: has hoisting, which means variable declarations are moved to the top of their containing scope during the compilation phase. However, only the declaration is hoisted, not the initialization.

console.log(exampleVar); // undefined
var exampleVar = "I am hoisted!";




