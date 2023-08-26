let sum = function (a, b) {
    console.log(a + b);
}
sum(2, 3);
//* updatation
sum = function () {
    console.log("after updatation");
}
sum();


//? hoisting technique
//! Lexical function
function outerF() {
    let b = 4;
    function innerF() {
        console.log(a)
        console.log(b)
    }

    //* variable is defined below the function even though it can be accessed in funciton beacuse of hoisting technique in js
    //* hoisting make varible pretend to be on top. 
    //?  Here one more concept is working which is calles scoping and lexical scope
    let a = 2;
    innerF();
}
outerF();

//? but in variable
//! will give and error [ ReferenceError: Cannot access 'c' before initialization ]
//* Let and const both gives same error besides var,
// console.log(c);
// let c;

//? but if it is declared with var then, output will be UNDEFINED.
console.log(d);
var d;