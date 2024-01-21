<!-- 
In PHP, variables are used to store data that can be manipulated, retrieved, and utilized within a script. Here are the rules for creating variables in PHP along with some examples:

Rules for creating variables in PHP:
Variable Names:

Must start with a dollar sign $.
Can contain letters, numbers, and underscores.
Cannot start with a number.
Are case-sensitive.
Assignment:

Variables are assigned using the assignment operator =.
Data Types:

PHP variables don't require explicit declaration of data types.
The data type is determined dynamically based on the assigned value.
Examples:
Valid Variable Names: -->

<?php
$myVariable;
$_anotherVariable;
$variable123;
$my_Variable;
?>

<!-- Invalid Variable Names: -->
<?php
$1variable; // Cannot start with a number
$my Variable; // Contains a space
$my-Variable; // Contains a hyphen
?>

<!-- Assigning Values to Variables: -->
<?php
$name = "Dhana"; // String
$age = 23; // Integer
$height = 5.11; // Float
$isStudent = true; // Boolean
?>

<!-- Using Variables: -->
<?php
echo $name; // Outputs: Dhana

$newAge = $age + 0; // Perform operations using variables
echo $newAge; // Outputs: 23

// Concatenation of strings using variables
echo "Name: " . $name . ", Age: " . $age;
// Outputs: Name: Dhana, Age: 23
?>