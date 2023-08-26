const prompt = require("prompt-sync")();
/**
 *! method chaining
 */
let name = prompt("enter ur name : ");
// let newName = name.trim();
// console.log(newName);
// let upper = newName.toUpperCase();
// console.log(upper);

let name1 = "  kunal thakre   ";
let methodChain = name1.trim().toUpperCase();
console.log(methodChain);
