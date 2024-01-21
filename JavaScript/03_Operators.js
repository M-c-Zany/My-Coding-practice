
/*1. Arithmetic Operators:
   - Perform basic arithmetic operations.
   - `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulus).*/

   
   let a = 10;
   let b = 3;
   console.log(a + b); // 13
   console.log(a - b); // 7
   console.log(a * b); // 30
   console.log(a / b); // 3.333...
   console.log(a % b); // 1
   

/*2. Comparison Operators:
   - Compare values and return a Boolean result.
   - `==` (equality), `===` (strict equality), `!=` (inequality), `!==` (strict inequality).
   - `<`, `>`, `<=`, `>=`.*/

   
   let x = 5;
   let y = "5";

   console.log(x == y); // true (loose equality)
   console.log(x === y); // false (strict equality)
   console.log(x != y); // false
   console.log(x !== y); // true
   

/*3. Logical Operators:
   - Combine or manipulate Boolean values.
   - `&&` (logical AND), `||` (logical OR), `!` (logical NOT).*/

   
   let isTrue = true;
   let isFalse = false;

   console.log(isTrue && isFalse); // false
   console.log(isTrue || isFalse); // true
   console.log(!isTrue); // false
   

/*4. Assignment Operators:
   - Assign values to variables.
   - `=` (assignment), `+=`, `-=`, `*=`, `/=`, `%=`.*/

   
   let num = 10;
   num += 5; // num = num + 5
   console.log(num); // 15
   

/*5. Unary Operators:
   - Operate on a single operand.
   - `++` (increment), `--` (decrement).*/

   
   let counter = 0;
   counter++;
   console.log(counter); // 1
   

/*6. Conditional (Ternary) Operator:
   - A concise way of writing an `if-else` statement.
   - `condition ? expr1 : expr2`.*/

   
   let age = 20;
   let isAdult = age >= 18 ? "Adult" : "Minor";
   console.log(isAdult); // "Adult"
   

/*7. Bitwise Operators:
   - Perform bitwise operations on integers.
   - `&` (bitwise AND), `|` (bitwise OR), `^` (bitwise XOR), `~` (bitwise NOT), `<<` (left shift), `>>` (right shift).*/

   
   let c = 5; // binary: 0101
   let d = 3; // binary: 0011

   console.log(a & b); // 1 (bitwise AND)
   console.log(a | b); // 7 (bitwise OR)
   

/*8. Logical Short-Circuiting:
   - Take advantage of the short-circuiting behavior of `&&` and `||` for conditional assignments.*/
   
   let user = { name: "John" };
   let username = user && user.name; // Avoids null/undefined error