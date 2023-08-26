const prompt = require("prompt-sync")();
//? declar & initialise the multiplegreet fn
function multipleGreet(greet, count) {
    //* higher order fn
    for (let i = 0; i <= count; i++) {
        greet();
    }
}

//? declaring and initialising greet fn
const greet = function grt() {
    console.log("namaste");
};

//? calling multiplegreet fn
multipleGreet(greet, 4);

//* if we passing the fn as a arguements then we just have write
//* greet and greet(); 2'one will be like calling the fn not passing as a arguements

//! Another way is like but not necessary
console.log("new method --------------------------");
multipleGreet(function () {
    console.log("namaste");
}, 2);
multipleGreet(function grt() {
    console.log("namaste");
}, 2);

//todo :- return fn
function oddEvenTest(request) {
    if (request == "odd") {
        let odd = function (n) { //or return function
            console.log(!(n % 2 == 0));
        };
        return odd;

    } else if (request == "even") {
        let even = function (n) {  //or return function
            console.log((n % 2 == 0));
        };
        return even;

    } else {
        console.log("wrong request");
    }
}

let request = "odd";//* we have reset this separetly for checking even or odd

