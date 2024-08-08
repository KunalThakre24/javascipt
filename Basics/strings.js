//* STRINGS 
// Strings are Immutables in Js -> can't be changes ones declared.
// all these string methods, make new string, Old strings remains same.

//*1 .trim() spaces form front and end.
//? Use cases - In password, where user accidentally gives spaces.
let trimEx = "  starting (&) ending with spaces"
console.log(trimEx.trim());

//*2 .toUpperCase(), .toLowerCase() = you get the idea by names, don't you, yes!
let upperLowerCaseEx = "conveRt Into .";
console.log("After uppercase:", upperLowerCaseEx.toUpperCase());
console.log("After lowercase:", upperLowerCaseEx.toLowerCase());

//*-> Arguements
//?   value that we pass to the method.
//?   can be multiple/different types ("thakre", "20yr old", 2024);
//*4  .concat("arguement"); 
//?   add value to that selected variable's value.
let concateEx = "kunal";
console.log(concateEx.concat("Thakre"))

//*5 .indexOf("arguement"");
//?   returns the first appeared index of given arguements. OR returns -1 if not found.
let indexOfEx = "indexOf 'A'";
console.log("index is :", indexOfEx.indexOf('A'));// output - index is : 9
let ExOfRtnMinus = "indexOf 'A'";
console.log("index is :", indexOfEx.indexOf('B')); //output - index is : -1

//! METHOD CHAINING. -> CAN APPLY MULTIPLE METHODS TO A SINGLE VARIABLE.
//? works from ( Left ->to Right ).
let methdChainEx = "  trim & turn into upperCase.   ";
let MethdChainOutput = methdChainEx.trim().toUpperCase();
console.log(MethdChainOutput);

//*6 .slice("arguement").
//?  returns the sliced part accord. to given agruements.
let sliceEx = "ILoveCoding";
console.log(sliceEx.slice(5));
// will return from the 5 index to end.

//   sliceEx.slice(starting indx, ending indx);
//   slice(1,5) will give index's value from 1-4. not inclusive 5.    
console.log(sliceEx.slice(1, 5));

//! What if pass negative(-) value as a arguement in .slice()method. 
//! str.slice(-no.) = str.slice(str.length-1); 

//*7 .replace("word you wanna change","by new word") method for replacing a string.
let replaceStrEx = "English comes to me";
console.log(replaceStrEx.replace("English comes to me", "I can speak English.")); //opt- I Do Coding!

//*8 .repeat("how many times");
let repeatStrEx = "Repeat*3";
console.log(repeatStrEx.repeat(2)); //opt- Repeat*3Repeat*3


