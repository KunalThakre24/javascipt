// ther are  7 types of primitive datatypes in javascipt are as follows :-
// N - null
// N - number
// B - boolean
// B - Bignit
// S - symbol
// S - string
// U - undefined

// nn bb ss u
let a = null;
let b = 33;
let c = true; // can also be false
let d = BigInt("345");
let d2 = BigInt("34") + BigInt("6");
console.log(d2); // this will add the bignint no.
let e = "kunal";
let f = Symbol("I am nice symbol");
let g = undefined;
console.log(a,b,c,d,e,f,g);

// typeof() can tell us what type of data types is it
console.log(typeof(b));
console.log(typeof g);




// OBJECTS
let obj = {
    "one" : true,
    "two" : "two",
    "three" : 34
}
console.log(obj);
console.log(obj["two"]);



// in const we can add new objects and value in it
const ex = {
    name : "kunal",
    surname : "thakre",
    class : 12
}

ex[ "section" ] = "c secion"
console.log(ex);

// but we can't initialze again
// ex = {
//     this will give an error in terminal
// }


const dis = {
    ok : 'fine',
    hain : 'yes'
}
console.log(dis.hain);
