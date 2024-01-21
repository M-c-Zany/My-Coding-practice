<!--In PHP, variables can hold different types of data. PHP supports various data types that are used to define the kind of data a variable can hold. Here are the primary data types in PHP: -->

<!-- Integer: Whole numbers without decimal points. -->
<?php
$intVar = 10;
?>

<!-- Float (Floating-point numbers or Doubles): Numbers with decimal points. -->
<?php
$floatVar = 3.14;
?>

<!-- String: A sequence of characters, enclosed in single quotes ' or double quotes ". -->
<?php
$stringVar = "Hello, Baby";
?>

<!-- Boolean: Represents a truth value, either true or false. -->
<?php
$boolVar = true;
?>

<!-- Array: Holds multiple values in an ordered list. -->
<?php
$arrayVar = array(1, 2, 3, 4, 5);
// or
$arrayVar = [1, 2, 3, 4, 5]; // As of PHP 5.4, shorthand syntax
?>

<!-- Object: Instances of user-defined classes which can contain properties and methods. -->
<?php
class MyClass {
    public $prop1 = "Property 1";
    public function myMethod() {
        return "Hello from method!";
    }
}
$objVar = new MyClass();
?>

<!-- NULL: Represents a variable with no value. -->
<?php
$nullVar = null;
?>


// Examples
<?php
$name = "Zany";
$income = 200;

/* php data types
1. String
2. Integer
3. Float
4. Boolean
5. Object
6. Array
7. NULL
*/

// String - sequence of characters
$name = "Zany";
$friend = 'Dhana';
echo "$name ka friend is $friend";


// Integer - Non decimal number
$income = 455;
$debts = -655;
echo "<br>";
echo $income;
echo "<br>";
echo $debts;
echo "<br>";

// Float - Decimal point number
$income = 344.5;
$debts = -45.5;
echo $income;
echo "<br>";
echo $debts;
echo "<br>";

// Boolean - Can be either true or false
$x = true;
$is_friend = false;
echo var_dump($x);
echo "<br>";
echo var_dump($is_friend);
echo "<br>";

// Object - Instances of classes
// Employee is a class ---> Zany can be one object

// Array - Used to store multiple values in a single variable
$friends = array("Dhana", "shubham", "skillf", "Larry");
echo var_dump($friends);
echo "<br>";
echo $friends[0];
echo "<br>";
echo $friends[1];
echo "<br>";
echo $friends[2];
echo "<br>";
echo $friends[3];
echo "<br>";
//echo $friends[4]; // will throw an error as the size of array is 4

// NULL
$name = NULL;
echo var_dump($name);
?>
