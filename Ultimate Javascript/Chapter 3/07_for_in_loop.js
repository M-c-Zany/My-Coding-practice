// Define an object 'marks' with student names as keys and their respective marks as values
let marks = {
    zany: 99,
    thiru: 100,
    loki: 100,
    parshu: 100
}

// Use a 'for...in' loop to iterate over the keys of the 'marks' object
for (let studentName in marks) {
    // Uncomment the line below to see the iteration index (key) in the console
    // console.log(studentName);

    // Display the marks of each student in the console
    console.log("Marks of " + studentName + " are " + marks[studentName]);
}

/*
Explanation:
1.marks: An object containing student names as keys and their corresponding marks as values.
2.for...in loop: This loop iterates over the keys of the `marks` object, and the loop variable `studentName` takes on each key in each iteration.
3.console.log("Marks..."): Prints the student's name and their marks to the console. The `marks[studentName]` is used to access the value (marks) associated with the current student name.
4. Commented lines: There's a commented line that you can uncomment if you want to see the iteration index (student name) in the console.
*/