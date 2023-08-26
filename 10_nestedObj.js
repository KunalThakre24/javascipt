//*  Nested object in javascipt
const mainObj = {
  inner1Obj: {
    first: 1,
    second: 2,
  },

  inner2Obj: {
    first2: 3,
    second2: 4,
  },
};

console.log(mainObj);

//* Individual calling
let firstOfInner1Obj = mainObj.inner1Obj.first;
console.log(`it will print first value of inner1obj : ${firstOfInner1Obj}`);
console.log(mainObj.inner2Obj.second2);

delete mainObj.inner1Obj.second;
console.log(mainObj);
