//! STRING IS IMMUTABLE IN JS
//* creates new string and does the new changes
let name = "Kunalthakre";
// * console.log(name.slice(0, 5));
//* console.log(name.slice(5));
//or (5,name.length)  //? by default to last char
//! if (-2) --> (total length-input)
//? kunalthakre = 11-2 = 9
//? 9 = r from r to last char
console.log(name.slice(-2));

//* replace and repeat method
let replace = "Ilovecoding";
console.log(replace.replace("love", "do"));
//*
console.log(replace.repeat(5));

//? replace more than 2 char
let re = "ldfjdkklss";
console.log(re.replace("k", "a").replace("k", "a"));

//*?!todo:
let newStr = "kunal tharke";
newStr[0] = "r";
console.log(newStr); //* output = kunal thakre
//? won't change because string are immutable

//* concat method
let con = "kunal";
let con1 = "thakre";
console.log(`after concat method ` + con.concat(con1));
