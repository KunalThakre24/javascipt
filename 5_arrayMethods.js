//** arrays method */
//? push -> add to end
//? pop  -> delete from end and returns it
//? unshift -> add to start
//? shift -> delete from start and returns it

let arr = ["kunal", "thakre", "is", "student"];
arr.push("a bhul gaya");
console.log(arr);

//? 1. IN pop method last element will remove
arr.pop();
// console.log(arr.pop()); //! will print last element

//? 2. unshift method will add to start
arr.unshift("a laga lena agge");
console.log(arr);

arr.shift(); //? will delete first element of the array
console.log(arr); //! original array will print

//? 3. indexof AND includes
console.log(arr.indexOf("is")); //* shows index
console.log(arr.includes("is")); //* true or false

//? 4. concat method
//! makes new array and make changes
let con = ["first", "second"];
let con1 = ["third", "fourth"];
console.log(con.concat(con1));

//? 5. reverse method
//! doesn't make new array
let rev = ["2", "3", "5"];
console.log(rev.reverse());

//? 6. slice method
//! copies a portion of an array
let slc = ["3", "3", 3, 4];
//* syntax = slc.slice(str index, end index(optionals))
//* syntax = slc.slice(index(from to end));
console.log(`without agruements ` + slc.slice());
console.log(slc.slice(2));
console.log(slc.slice(1, slc.length));
//! if (-2) --> (total length-input)
//? ["3", "3", 3, 4] = 4-2 = 2
//? index(2) = 3 from 3 to last element
//todo in short elements from end
console.log(slc.slice(-2));
//* if we pass invalid vlaue in method then an empty array wil return
