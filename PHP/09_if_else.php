<?php
// Example 1
$a = 665;
$b = 9;

// Check if $a is greater than 78
if ($a > 78) {
    echo "a is greater than 78";
} else {
    echo "a is not greater than 78";
}

// Example 2
$age = 24;

// If-else ladder to determine drink options based on age
if ($age > 18) {
    echo "You can drink water with chai and alcohol<br>";
} elseif ($age > 13) {
    echo "You can drink chai only with water. No alcohol for you<br>";
} else {
    echo "You can drink water only<br>";
}

// Example 3
echo "Done";

// Sample score for the degree
$DegreeScore = 80;

// Evaluate the Degree score using an if-else ladder
if ($DegreeScore >= 90) {
    echo "Excellent! You scored an A.";
} elseif ($DegreeScore >= 80) {
    echo "Good job! You scored a B.";
} elseif ($DegreeScore >= 70) {
    echo "Nice! You scored a C.";
} elseif ($DegreeScore >= 60) {
    echo "Well done! You scored a D.";
} else {
    echo "Sorry, you did not pass the Degree. Keep practicing!";
}

// Example 4
// Driver's age
$driverAge = 30;

// Check eligibility to drive based on age
if ($driverAge >= 25 && $driverAge <= 65) {
    echo "You are eligible to drive. Have a safe journey!";
} elseif ($driverAge < 18) {
    echo "Sorry, you are too young to drive.";
} elseif ($driverAge >= 66) {
    echo "Sorry, you are too old to drive.";
} else {
    echo "You don't fall into the specified age range for driving.";
}
?>
