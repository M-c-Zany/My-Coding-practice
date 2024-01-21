<?php

// Define a variable $name with a string value
$name = "Lokesh is a good boy";

// Define a variable $gender with a string value
$gender = "male";

// Output the value of $name
echo $name;
echo "<br>"; // Line break for better formatting

// Output the length of the string in $name using strlen function
echo "The Length Of The Name is " . strlen($name);
echo "<br>"; // Line break

// Output the number of words in the string in $name using str_word_count function
echo str_word_count($name);
echo "<br>"; // Line break

// Output the reversed string of $gender using strrev function
echo strrev($gender);
echo "<br>"; // Line break

// Output the position of the word "good" in the string $name using strpos function
echo strpos($name, "good");
echo "<br>"; // Line break

// Output the string $name with "Lokesh" replaced by "khaja" using str_replace function
echo str_replace("Lokesh","khaja",$name);
echo "<br>"; // Line break

// Output the string $name repeated 5 times using str_repeat function
echo str_repeat($name,5);
echo "<br>"; // Line break

// Output the string with whitespace trimmed from the right using rtrim function
echo rtrim("  This is khaja  ");
echo "<br>"; // Line break

// Output the string with whitespace trimmed from the left using ltrim function
echo ltrim("  This is khaja  ");

?>
