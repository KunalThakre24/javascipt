const calculator = {
    add: function (a, b) {
        console.log('addition : ' + (a + b));
    },
    sub: function (a, b) {
        console.log('sub : ' + (a - b));
    }
}
calculator.sub(4, 2)

//* we can relate Math.abs() method fromt this

//? OR
const cal1 = {
    //* Js will automatically detect that it is a fn
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
}