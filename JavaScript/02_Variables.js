Variables:

/*1. Variable Declaration:
   - In JavaScript, you can declare variables using three keywords: `var`, `let`, and `const`.
   - `var` has function-scoping, while `let` and `const` have block-scoping.
   - Use `let` for variables that need to be reassigned, and `const` for constants.*/

   
   var x = 10;
   let y = 20;
   const PI = 3.14;
   

/*2. Variable Hoisting:
   - Variables declared with `var` are hoisted to the top of their scope.
   - This means you can use a variable before it's declared, but it will have an initial value of `undefined`.*/

   
   console.log(a); // undefined
   var a = 5;
   

/*3. Scope:
   - Scope defines the visibility and accessibility of variables.
   - Global scope: Variables declared outside any function or block.
   - Local scope: Variables declared within a function or block.*/

   
   function example() {
     var localVar = "I am local";
     console.log(localVar);
   }

   example();
   // console.log(localVar); // Error, localVar is not defined outside the function
   

/*Data Types:

1. Primitive Data Types:
   - JavaScript has six primitive data types: `string`, `number`, `boolean`, `null`, `undefined`, and `symbol`.
   - They are immutable and stored by value.*/

   
   let str = "Hello, World!";
   let num = 42;
   let bool = true;
   let n = null;
   let u = undefined;
   let sym = Symbol("unique");
   

/*2. Object and Array:
   - Objects and Arrays are complex data types.
   - Objects are collections of key-value pairs, and Arrays are ordered lists.*/

   
   let person = {
     name: "John Doe",
     age: 30,
     isStudent: false,
   };

   let BioData = {
        name:"Dudekula Khaja",
        age:23,
        phone: 9346481407,
   }

   let colors = ["Red", "Green", "Blue"];
   let GirlFriends = ["Pravallika","Vaishnavi","Dhana","Hafeeza"];
   

/*3. Typeof Operator:
   - Use the `typeof` operator to check the data type of a variable.*/

   
   console.log(typeof str); // "string"
   console.log(typeof num); // "number"
   console.log(typeof bool); // "boolean"
   console.log(typeof person); // "object"
   

/*4. Type Coercion:
   - JavaScript is a loosely typed language, and it performs type coercion when different types are involved in an operation.*/

   
   console.log("5" + 5); // "55"
   console.log("5" - 1); // 4
   

/*5. Undefined vs. Null:
   - `undefined` is the default value of declared variables.
   - `null` is an intentional absence of any object value.*/

   
   let a;
   console.log(a); // undefined

   let b = null;
   console.log(b); // null
   

/*6. NaN (Not-a-Number):
   - Represents the result of an invalid mathematical operation.*/

   
   let result = "Hello" / 5;
   console.log(result); // NaN
   

/*Understanding variables and data types is fundamental to working with JavaScript. Proper use of variables and knowledge of data types is crucial for writing robust and efficient code.*/