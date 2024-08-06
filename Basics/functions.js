function name(params) {
    // function-body
}



// fn declaration & initialize
function first_function() {
    console.log('hello');
}
// fn calling
first_function();



// function for squares
function sqr(x /* --> parameter */) {
    // console.log(x*x);
    return x * x;
}
let a = sqr(2); //  --> arguments
console.log(a);



// same function but can be stored in a variable for futher use
function sqr(y) {
    return y * y;
}
let y = sqr(2);
console.log(y);



/*
// 
//          Functions without a parameter and return;
// 
*/
function ex() {
    console.log('without return or parameter');
}
ex();

// 

function ex2() {
    return 'this will also work';
}
// let extra = ex2();
// console.log(extra);
//  we can also modify this function's value after storing it in variable
let extra = "like this " + ex2();
console.log(extra);



/*
// 
//          Functions without a parameter(SINGLE OR MULTIPLE);
// 
*/

// DEFAULT PARAMETERS
function print(word = "this will print when there is no argument") {
    console.log(word);
}
print();
// with arguments
function print(word = "this will print when there is no argument") {
    console.log(word);
}
print("okay");


//  additon function
function sum(x, y = " no addition") {
    return x + y;
}
console.log(sum(2));
// even add no
function sum1(a, b = 2) {
    return a + b;
}
console.log(sum1(2));

// this is wrong 
// function sum1(a=1,b) {
//     return a + b;
// }
// console.log(sum1(2));


// you can assign both arguement a default value but can't give the first parameter default parameter
// it will override
function sum1(a = 1, b = 2) { //Default para-m assign right - left.
    return a + b;
}
console.log(sum1(3));



//  A different way to pass agruments
function sumofnum([num1, num2]) {
    return num1 + num2;
};

let number = [2, 4];  // of num = [2,3,4] then there will no error 4 will be unharmed

let result = sumofnum(number);
console.log(result);


/*
// 
//          Functions with unlimited parameter;
//           it is not the standardized way to write fn
// 
*/

//fn declaration
function sum_Of_Parameter() {
    let total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
        return total;
    }
}

// fn calling
let output = sum_Of_Parameter(1, 2, 3, 4);
console.log(output);
