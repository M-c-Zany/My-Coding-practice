<?php
// Print a heading
echo "While loops in PHP";
echo "<br>";

// Commented out individual echo statements
// echo 1;echo "<br>";
// echo 2;echo "<br>";
// echo 3;echo "<br>";
// echo 4;echo "<br>";
// echo 5;echo "<br>";

/* 
   While loop structure:
   while (condition) {
       // Code to be executed while the condition is true
   }
*/

// Initialize a counter variable $i to 0
$i = 0; 

// While $i is less than 5, execute the code block inside the loop
while ($i < 5) {
    // Print a message indicating the value of $i
    echo "The value of i is ";
    echo $i + 1; // Increment $i by 1 to display values from 1 to 5
    echo "<br>";

    // Increment $i by 1 for the next iteration
    $i += 1; 
} 

?>
