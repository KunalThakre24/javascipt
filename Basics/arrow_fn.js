//  1.  one parameter, and a single return statement
// const square = (x) => x*x;
// const square = x => x*x;  --> it can be written like this without parenthesis,
//                                  only for single parameter.

// 2.   Multiple parameter, and single return expression
// const sumOfParameter = (x,y) => x + y;

//3.    Multiple statements in fn expression
// const sum = (x , y) => {
//     console.log('Adding ${x} and ${y}');
//     return x + y;
// };

// 4.   Returnning an object
// const sum_Of_Parameter = (x,y) => ({ sum: x + y, difference: x - y});
//  use ({})  : for object returning



//  question : write a fn, and return the addition of 2 num.
const add = (a , b) => a+b;
console.log(add(3,1));

// for square
const sqr = (x) => x * x;
console.log(sqr(3));

// for multiple statements in fn expression.
const sum = (x , y) => {
    console.log('Adding ${x} and ${y}');
    return x + y;
};
let naya = sum ( 3,1 );
console.log(naya);

// returning an object
const sum_Of_Parameter = (x,y) => ({ sum: x + y, difference: x - y});
console.log(sum_Of_Parameter(2,1)); 
