// Chapter 1 - Q1
// Declaration and initialization of variables 'a' and 'b'
let a = "Zany";
let b = 6;

// Output the result of concatenating 'a' and 'b'
console.log(a + b);

// Chapter 1 - Q2
// Output the data type of the result of adding 'a' and 'b'
console.log(typeof (a + b));

// Chapter 1 - Q3
// Declaration of a constant variable 'a1' with an object as its value
const a1 = {
  name: "Zany",
  section: 1,
  isPrincipal: false
};
// Uncommenting the lines below would result in an error because 'a1' is a constant and cannot be reassigned
// a1 = 45;
// a1 = {};

// Chapter 1 - Q4
// Adding a new key-value pair and updating the value of an existing key in the object 'a1'
a1['friend'] = "Shubham";
a1['name'] = "Lovish";
console.log(a1);

// Chapter 1 - Q5
// Declaration of a constant variable 'dict' with an object containing word definitions
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
};

// Output the definition of the word 'yakka' from the 'dict' object
console.log(dict['yakka']);
