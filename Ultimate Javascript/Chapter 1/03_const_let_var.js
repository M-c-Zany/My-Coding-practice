// 1. `var`:
/*Scope: `var` is function-scoped, meaning it is visible throughout the entire function where it's declared.
Reassignment: Can be reassigned.
Hoisting: Variables declared with `var` are hoisted to the top of their scope during the compilation phase.*/

function example() {
  if (true) {
    var x = 10;
    console.log(x); // Output: 10
  }
  console.log(x); // Output: 10 (accessible outside the block)
}

example();
console.log(x); // Error: x is not defined (outside the function)

// 2. `let`:
/*Scope: `let` is block-scoped, meaning it is visible only within the block (or statement) where it's declared.
Reassignment: Can be reassigned.
Hoisting: Variables declared with `let` are hoisted to the top of their block during the compilation phase, but not initialized.*/

function example() {
  if (true) {
    let y = 20;
    console.log(y); // Output: 20
  }
  // console.log(y); // Error: y is not defined (outside the block)
}

example();
// console.log(y);   // Error: y is not defined (outside the function)

// 3. `const`:
/*Scope: `const` is block-scoped, just like `let`.
Reassignment: Cannot be reassigned. Once assigned, the value remains constant.
Hoisting: Variables declared with `const` are hoisted to the top of their block during the compilation phase, but not initialized.*/

function example() {
  if (true) {
    const z = 30;
    console.log(z); // Output: 30
    // z = 40;        // Error: Assignment to a constant variable
  }
  // console.log(z); // Error: z is not defined (outside the block)
}

example();
// console.log(z);   // Error: z is not defined (outside the function)
/*
Summary:
Use `var` if you need function-scoping and are working with an older codebase.
Use `let` when you need block-scoping and plan to reassign the variable.
Use `const` when you need block-scoping and want to ensure the variable's value remains constant after assignment.
*/
