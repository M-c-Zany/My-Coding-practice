
// 1. push() - Adds Elements to the End:

let books = ['1984', 'Brave New World', 'Fahrenheit 451'];
books.push('Dune', 'Neuromancer');
console.log(books);
// Output: ['1984', 'Brave New World', 'Fahrenheit 451', 'Dune', 'Neuromancer']

// Pushing number to array
let numbers1 = [1,2,3];
numbers1.push(4,5)
console.log(numbers1)
// Output: [1,2,3,4,5]

// Pushing Strings to array
let telugu_movies = ["Bahubali","RRR","Pushpa"];
telugu_movies.push("Salaar","Pushpa2");
console.log(telugu_movies)

// Pushing objects to the array
let my_friends = [
    {name:'Thiru', phone: 1234 },
    {name:'Lokesh',phone:5678}
];
let newFriends = {name:'Dhana',phone:143143};
my_friends.push(newFriends);
console.log(my_friends);

// Pushing arrays to array (Nested Array)
let sequence_movies = [["KGF1","KGF2"],["Bahubali1","Bahubali2"]];
sequence_movies.push(["Pushpa1","Pushpa2"]);
console.log(sequence_movies);

// Pushing a function an array
let functions = [
    function add(a,b) {return a+b},
    function subtract(a,b) {return a-b},
]
functions.push(function multiply(a,b){return a*b})
console.log(functions)

// Pushing Mixed types to an array
let mixedarray = [1,'two',{key:'value'}];
mixedarray.push(3,"four",{movie:"bahubali"})
console.log(mixedarray)

// 2. pop() - Removes the Last Element:

let movies = ['Inception', 'Blade Runner', 'The Matrix'];
let removedMovie = movies.pop();
console.log(removedMovie); // Output: 'The Matrix'
console.log(movies); // Output: ['Inception', 'Blade Runner']

// Popping Numbers from array
let numbers2 = [1,2,3,4,5];
let poppednumber = numbers2.pop();
console.log(poppednumber);
console.log(numbers2);

// Popping strings from array
let telugu_movies1 = ["Maghadheera","ega","Bahubali","KGF"]
let removedMovie1 = telugu_movies1.pop()
console.log(telugu_movies1)
console.log(removedMovie1)

// Popping objects from array
let students1 = [
    {name:'thiru',age:23},
    {nmae:'lokesh',age:23},
    {name:'malli',age:23}
]

let removedstudents = students1.pop()
console.log(students1)
console.log(removedstudents) 

// Popping array from an array (Nested Arrays)
Nested_array = [[1,2],[2,3],[3,4]];
let removednestedarray = Nested_array.pop();
console.log(Nested_array);
console.log(removednestedarray)

// Popping functions from an array
let functions1 = [
    function add(a,b) {return a+b},
    function subtract(a,b) {return a-b},
    function multiply(a,b) {return a*b},
];

let removedfunctions = functions1.pop();
console.log(functions1);
console.log(removedfunctions);

// Popping Mixed Types from an Array:
let mixedArray = [1, 'two', { key: 'value' }, true, [4, 5]];
let removedItem = mixedArray.pop();
console.log(removedItem); // Output: [4, 5]
console.log(mixedArray);
// Output: [1, 'two', { key: 'value' }, true]


// 3. shift() - Removes the First Element:

let cities = ['New York', 'Tokyo', 'Paris'];
let removedCity = cities.shift();
console.log(removedCity); // Output: 'New York'
console.log(cities); // Output: ['Tokyo', 'Paris']



// 4. unshift() - Adds Elements to the Beginning:

let planets = ['Mars', 'Venus'];
planets.unshift('Earth', 'Jupiter');
console.log(planets);
// Output: ['Earth', 'Jupiter', 'Mars', 'Venus']

// 5. indexOf() - Finds the Index of an Element:

let countries = ['USA', 'Japan', 'France'];
let index = countries.indexOf('France');
console.log(index); // Output: 2

// 6. slice() - Extracts a Portion of an Array:

let fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Kiwi'];
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);
// Output: ['Banana', 'Orange', 'Grapes']

// 7. forEach() - Iterates Over Array Elements:

let instruments = ['Guitar', 'Piano', 'Drums'];
instruments.forEach(function (instrument) {
    console.log(`Playing the ${instrument}`);
});
// Output: Playing the Guitar, Playing the Piano, Playing the Drums
