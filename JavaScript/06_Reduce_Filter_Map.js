
// Example 1: Finding the product of elements


let bill = [10, 20, 10, 30, 110];
let product = bill.reduce((result, value) => result * value, 1);
console.log(product);


// This code calculates the product of all elements in the array.
// Example 2: Finding the maximum value


let bill_01 = [10, 20, 10, 30, 110];
let max = bill_01.reduce((maxValue, value) => Math.max(maxValue, value), -Infinity);
console.log(max);


// This code finds the maximum value in the array.
// Example 3: Concatenating strings


let words = ["Hello", " ", "World", "!"];
let sentence = words.reduce((result, word) => result + word, "");
console.log(sentence);


// This code concatenates the strings in the array to form a sentence.
// Example 4: Counting occurrences


let numbers = [1, 2, 3, 4, 2, 5, 2, 6];
let countOccurrences = numbers.reduce((count, number) => {
    count[number] = (count[number] || 0) + 1;
    return count;
}, {});

console.log(countOccurrences);