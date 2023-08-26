//* math objects or properties
//?  Math.E        // returns Euler's number
//?  Math.PI       // returns PI
//*
//?  Math.SQRT2    // returns the square root of 2
//?  Math.SQRT1_2  // returns the square root of 1/2
//?  Math.LN2      // returns the natural logarithm of 2
//?  Math.LN10     // returns the natural logarithm of 10
//?  Math.LOG2E    // returns base 2 logarithm of E
//?  Math.LOG10E   // returns base 10 logarithm of E
//! we don't use this much math obj in real life what we use is method most of the time

//* Math.abs();
//? returns absolute value
console.log(Math.abs(-34)); //Output ->  34

//* Math.pow(a,n);
//? returns power of given arguements
console.log(Math.pow(3, 2)); //Output -> 9

//todo:
//* Math.floor();
//? Returns x rounded down to its nearest integer
console.log(Math.floor(5.9999)); //output -> 5 but with - -6
//! floor down and ceil up [ opposite of each others ]
//* Math.ceil();
//? Returns x rounded down to its nearest integer
console.log(Math.ceil(-5.9999)); //output -> 6 but with - -5
//todo:

//* Math.randow();
//? gives the random number b/w 0 to 1 but will never give exact 1
//? cuz, 1 is exclusive.
console.log(Math.random());
