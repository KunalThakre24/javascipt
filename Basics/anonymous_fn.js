//  anonymous fn 
//  anonymous means jiki koi identity ni hoti 
//  naa koi naam 
//  fn without name are called arrow fn
//  Rules, 1.  have store in a variable 


// Intialising
let a = function () {
    console.log("This is anonymous fn");
}
// calling
a();


//  if ii give a name to fn, there will be no problem.
let b = function ok() {
    console.log("This will also work");
}
b();





// this is called self invokign funciton
// it can be written where only one time function is running


// function declaration
(function example() {
    console.log("called");
})();

// fn calling
// by adding () in the end.
(function example() {
    console.log("called");
})();

// with parameter
(function (x) {
    console.log(x*x);
})(2);

function tr() {
    console.log('ok');
}
tr();
function tr2(x) {
    // console.log();
}
return x*x;
tr2(2);
