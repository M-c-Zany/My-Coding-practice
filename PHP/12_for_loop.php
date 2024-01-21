<?php
// Print a heading
echo "This is a for loop <br>";

/*
   For loop structure:
   for (initialization; condition; increment/decrement) {
       // Code to be executed in each iteration
   }
*/

// Initialize a counter variable $index to 0; continue loop while $index is less than 5; increment $index after each iteration
for ($index = 0; $index < 5; $index++) {
    // Print the current value of $index
    echo "The number is $index <br>";
}

// Note: Semicolon at the end of the for loop statement is removed, as it's not needed.

// Avoid running into an infinite loop
// The loop is missing an increment statement ($i++)

// Uncomment the following lines and add an increment statement to avoid an infinite loop
/*
for ($i = 0; $i < 87; ) { 
    echo $i;
    // Add an increment statement to ensure the loop condition changes
    // $i++;
}
*/

// Explanation:
// The loop initializes $i to 0, continues while $i is less than 87, but without an increment statement, $i will never change.
// To prevent an infinite loop, uncomment the for loop block and add $i++ inside the loop.
echo "For loop has ended"
?>
