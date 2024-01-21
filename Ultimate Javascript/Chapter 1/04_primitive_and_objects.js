// Primitives in JavaScript
// nn bb ss u - null, number, boolean, BigInt, string, symbol, undefined

// Declaration and initialization of variables with primitive values
let a = null;            // Null: represents the intentional absence of any object value
let b = 345;             // Number: represents numeric values
let c = true;            // Boolean: represents true or false values
                         // Note: 'c' can also be assigned false

// BigInt: represents integers of arbitrary precision
let d = BigInt("567") + BigInt("3");

let e = "Zany";         // String: represents text
let f = Symbol("I am a nice symbol"); // Symbol: creates unique symbols
let g;                   // Undefined: represents an uninitialized variable

// Output the values of variables a, b, c, d, e, f, g
console.log(a, b, c, d, e, f, g);

// Output the data type of variable c
console.log(typeof c);

// Non-Primitive Data Type - Objects in JavaScript

// Declaration of a constant variable 'item' with an object as its value
const item = {
  "Zany": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
};

// Accessing and outputting the value associated with the key "Shubh" in the object
console.log(item["Shubh"]);
