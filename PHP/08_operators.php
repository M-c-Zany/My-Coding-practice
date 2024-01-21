<!-- /*Here are some of the commonly used operators in PHP:

1. Arithmetic Operators:
`+` (Addition)
`-` (Subtraction)
`*` (Multiplication)
`/` (Division)
`%` (Modulus - returns the remainder of a division)

2. Assignment Operators:
`=` (Assignment)
`+=` (Addition assignment)
`-=` (Subtraction assignment)
`*=` (Multiplication assignment)
`/=` (Division assignment)

3. Comparison Operators:
`==` (Equal to)
`===` (Identical to - checks both value and type)
`!=` or `<>` (Not equal to)
`!==` (Not identical to)
`<` (Less than)
`>` (Greater than)
`<=` (Less than or equal to)
`>=` (Greater than or equal to)

4. Logical Operators:
`and` (Logical AND)
`or` (Logical OR)
`xor` (Logical XOR)
`&&` (Logical AND)
`||` (Logical OR)
`!` (Logical NOT)

5. Increment/Decrement Operators:
`++` (Increment)
`--` (Decrement)

6. Concatenation Operator:
`.` (Concatenation - used for joining strings)

7. Ternary Operator:
`? :` (Ternary operator - shorthand for an `if-else` statement)

8. Bitwise Operators:
`&` (Bitwise AND)
`|` (Bitwise OR)
`^` (Bitwise XOR)
`~` (Bitwise NOT)
`<<` (Left shift)
`>>` (Right shift)

9. Null Coalescing Operator:
`??` (Returns the first operand if it exists and is not `null`, otherwise, it returns the second operand) -->


<?php
/* Operators in PHP
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators 
4. Logical Operators
*/

// Define variables
$a = 45;
$b = 8;

// 1. Arithmetic Operators
echo "For a + b, the result is ". ($a + $b) . "<br>"; // Addition
echo "For a - b, the result is ". ($a - $b) . "<br>"; // Subtraction
echo "For a * b, the result is ". ($a * $b) . "<br>"; // Multiplication
echo "For a / b, the result is ". ($a / $b) . "<br>"; // Division
echo "For a % b, the result is ". ($a % $b) . "<br>"; // Modulus
echo "For a ** b, the result is ". ($a ** $b) . "<br>"; // Exponentiation

// 2. Assignment Operators
$x = $a; // Assign the value of $a to $x
echo "For x, the value is ". $x . "<br>";

$a += 6; // Add 6 to the value of $a (same as $a = $a + 6)
echo "For a, the value is ". $a . "<br>";

$a -= 6; // Subtract 6 from the value of $a (same as $a = $a - 6)
echo "For a, the value is ". $a . "<br>";

$a *= 6; // Multiply the value of $a by 6 (same as $a = $a * 6)
echo "For a, the value is ". $a . "<br>";

$a /= 5; // Divide the value of $a by 5 (same as $a = $a / 5)
echo "For a, the value is ". $a . "<br>";

$a %= 5; // Get the remainder when dividing $a by 5 (same as $a = $a % 5)
echo "For a, the value is ". $a . "<br>";

// 3. Comparison Operators 
$x = 78;
$y = 78;

echo "For x > y, the result is ";
echo var_dump($x > $y);

echo "For x >= y, the result is ";
echo var_dump($x >= $y);

echo "For x < y, the result is ";
echo var_dump($x < $y);

echo "For x <= y, the result is ";
echo var_dump($x <= $y);

echo "For x <> y, the result is "; 
echo var_dump($x <> $y); // Not equal

// 4. Logical Operators
$m = true;
$n = true;

echo "For m and n, the result is "; 
echo var_dump($m and $n); // Logical AND
echo "<br>";

echo "For m && n, the result is "; 
echo var_dump($m && $n); // Logical AND
echo "<br>";

echo "For m or n, the result is "; 
echo var_dump($m or $n); // Logical OR
echo "<br>";

echo "For m || n, the result is "; 
echo var_dump($m || $n); // Logical OR
echo "<br>";

echo "For !m , the result is "; 
echo var_dump(!$m); // Logical NOT
echo "<br>";
?>
