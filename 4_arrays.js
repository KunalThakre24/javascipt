// empty array declaration
//! ARRAY ARE MUTABLE IN JS
//! string and objects are also mutable
//* doesn't creates new array does changes in existence array
let arr = [];
arr[0] = "lsdkjfklajdl"; //? length = 12;
arr[1] = "oppenheimer";

console.log(arr[0].length); //? output = 12;
console.log(arr[0][0]); //? output = 'l';

//* Mutable array
let arr1 = ["first", "secodn"]
let arr2 = arr1;
//* making changes in arr2 
arr2[1] = "BARBBIE";
console.log(`arr2 : ${arr2}`);
//? even we are making changes in arr2 but cuz,of mutablity arr1 also changing its value
console.log(`arr1 : ${arr1}`);


//! but normal variable are immutable.
let a = 3;
let b = a;

b = 4;
console.log(a);
console.log(b);

let obj1 = {
    first: "3",
    second: '4',
}
let obj2 = obj1;
obj2.second = "second";

console.log(obj1);
console.log(obj2);

let stobj1 = "hurray";
let stobj2 = stobj1;

stobj2 = "new word"
console.log(stobj1);
console.log(stobj2);
