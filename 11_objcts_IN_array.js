const arr = [
  {
    name: "same name",
    old: "same 34",
  },
  {
    name: "same name",
    old: "same 34",
  },
];

//todo:-  OR

const arr1 = [
  (firstObj = {
    name: "yuan",
    year: 3,
  }),
  (secondObj = {
    name: "chian",
    year: 2,
  }),
];

//* calling in this type of syntax will be done by indexing

console.log(arr[0].name); // same name
console.log(arr1[0].name); // yuan

//* adding
arr[0].gender = "male";
console.log("after adding :- ");
console.log(arr);

//* updating
arr[0].name = "not anymore";
console.log(arr);

//* deleting
delete arr[0].name;
console.log("after deleting :- ");
console.log(arr);
