// Define an array of student names
let students = ["zany", "thiru", "loki", "parshu"];

// Define an object with corresponding marks
let marks = {
    zany: 99,
    thiru: 100,
    loki: 100,
    parshu: 100
}

// Use a 'for...of' loop to iterate over the array of student names
for (let studentName of students) {
    // Display the marks of each student in the console
    console.log("Marks of " + studentName + " are " + marks[studentName]);
}

/*
Explanation:
1.students: An array containing student names.
2.marks: An object containing student names as keys and their corresponding marks as values.
3.for...of loop: This loop is used to iterate over the elements (student names) of the `students` array. In each iteration, `studentName` takes on the value of the current element.
4.console.log("Marks..."): Prints the student's name and their marks to the console using the `marks` object to look up the marks associated with each student.
Note that `for...of` is more suitable for iterating over arrays, whereas `for...in` is typically used for iterating over object keys. In this example, I've used `for...of` with an array, and it's important to mention that the order of iteration is guaranteed to be in the order of the elements in the array.
*/