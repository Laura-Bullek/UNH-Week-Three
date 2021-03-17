// WRITE YOUR CODE HERE

// Logging the names in the array
let names = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon"];

// Logging the tital number of elements of the array into the console
console.log (names.length);

// Logging a welcome message to each student in the array
console.log ("Welcome to the class " + names[0]);
console.log ("Welcome to the class " + names[1]);
console.log ("Welcome to the class " + names[2]);
console.log ("Welcome to the class " + names[3]);
console.log ("Welcome to the class " + names[4]);

// First element in the array is removed and replaced with a name of a new student
names[0] = "Zeta";

// An if statements that confirms the first element in the array has been replaced 
// from Alpha to Zeta
console.log (names[0] + " is in class");

