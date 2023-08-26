//todo :- String also pass by reference (  can change data of const declared obj )
//! It is common in js if you print the object in console in borwser you will
//! find that the order of key and value is uper niche, it happen but not a big deal
//! as in array it print in exact order
//?  Naming rule of key - we can't write key name like ( 1name ) it will give and erro
//* In js OBJECTS ARE ALSO PASSED BY REFERENCE
const objectl = {
  name: "kunal",
  year: "2 year",
  sec: "B",
  branch: "cse",
  score: [23, 43, 32],
};
//? How to get our values.
console.log(objectl);
console.log(objectl.score[1]);
console.log(objectl.name);
//! OR
console.log(objectl["score"]);

//* this [] type of call can we used in this way
//* here i have a obj which name object and "kunal" value
//* and another variable with "name" value similiar to the obj key ,now watch this
const obj = {
  name: "kunal",
};
let na = "name";
console.log("see : " + obj[na]);
console.log("this will give me undefined as a output : " + obj.na);
//* this will give me an error : undefined

//! js automatically turn the key into strings
// like this
//? In output it will not give an error because it turned them into string
let obj1 = {
  2: "a",
  null: "b",
  undefined: "b",
  Boolean: "b",
  BigInt: "b",
  Number: "b",
};
console.log(obj1);
//! but the catch is if you wanna print the specific value with the help of
//! number type key then u have 2 use [ ] type of calling u can't use ↓
//*  console.log(obj1.2);
console.log(obj1[2]);
//? Even when u using obj11[2] it is not indexing or using as a number js automatically converts 2 into string and then find the value.
//? or even
console.log(obj1.null); //* working fine

//todo:- just like that we can do new addition of object with value
//* i'm adding new obj in obj1 obj leteral ok!
obj1.newdata = "new";
console.log("after :- ");
console.log(obj1);
//! attention we can not print whole object with string in console but can print obj's vlaue by using obj.key,
let arr = [3, "kljkl", 56, "k"];
console.log("after adding new value, " + obj1); //* output - after adding new value, [object Object].
console.log(`after adding new value, ${obj1.newdata}`); //* output - after adding new value, new.

//* with const obj
const conObj = {
  first: "first",
  second: "second",
};
conObj.first = "now it's first";
console.log(conObj);

//todo:- Deletion in Object
delete obj1.newdata;
console.log(obj1);
