// diff between let const and var
// let  it can be updated but can't re-declared again (follow scoping)
// const  it can't be updated nor re-declared only initilazed and declared once (follow scoping)
// var  it's like a globally avaible (global scoping)
// var can be redeclared and updated

// Befor ES6 the var type was used in js programming but afte ES6 the let const are used
// sometimes via var bug can also enter in system



// var
var a = 3;
{
    var a = 2;
    console.log(a);
} 
console.log(a);
// output is 2 2



// const
const b = 'kunal';
// let b = 2;
// showing error 
// cant even use const's variable name 


// let 
let c = 'Thakre' ;
console.log(c);

