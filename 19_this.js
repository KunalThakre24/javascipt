let obj = {
    name: "kunal",
    math: 34,
    sci: 32,
    phy: 23,
    aveg() {
        //? will give an error
        //* ReferenceError: math is not defined
        // let avg = (math + sci + phy) / 3;
        //todo :- that's why we use this
        //? this keyword refers to an object that is executing the current piece of code.
        let avg = (this.math + this.sci + this.phy) / 3; //29.666666666666668

        //* this means object, obj.math == this.math
        console.log(`${this.name} got ${avg} marks`);
        //*
        console.log(this);
    }
}
obj.aveg();