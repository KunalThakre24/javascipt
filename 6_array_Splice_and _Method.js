//* splice method is all in one method which perform task like
//todo =  removes/replace/add elements in place
//* syntax = splice(start(index),deletecount,item()..itemN)
//! doesn't make new array
//? 1, colors.splice(4);
//? 1, colors.splice(0, 1);
//? 1, colors.splice(0, 1, "black", "grey");

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.splice(4));
//* output = [ 'pink', 'white' ];

// colors.splice(0, 1);
console.log(colors.splice(0, 1));
//* output = [ 'red' ]; deleted

console.log(colors.splice(0, 1, "black", "grey"));
console.log(colors);
//* deleted yellow and added 'black' and 'grey' colors

colors.splice(3, 0, "new color"); //? 3 on index, 0 deletion, itemn "new color"
console.log(colors);

//? 2, sort method
let sortt = [99, 89, 67, 42, 100]; //todo output = [ 100, 42, 67, 89, 99 ]
//! in js with numbers first convert the number in string and based on unicode it does sorting
//* in js sort method with no. have discrepancy
console.log(sortt.sort());
//* in string array
let sortts = ["bannana", "ava", "cat"];
console.log(sortts.sort());
