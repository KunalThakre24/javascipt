// todo app
const prompt = require("prompt-sync")();
let tasklist = [];

let req = prompt("Enter ur request : ")

while (true) {
    if (req == "quit") {
        console.log("quiting app");
        console.log("Todo list : ");
        for (key of tasklist) {
            console.log(key);
        }
        break;
    }

    if (req == "list") {
        console.log("----------------------------");
        console.log("Todo list : ");
        for (key of tasklist) {
            console.log(key);
        }
        console.log("----------------------------");
    } else if (req == "add") {
        let addTask = prompt("Enter ur task : ")
        tasklist.push(addTask);
        console.log('task added!');
    } else if (req === "del") {
        let indx = parseInt(prompt('enter taks index : '));
        tasklist.splice(indx, 1);
        console.log('task deleted!');
    } else {
        console.log("wrong request");
    }
    //? we have to ask again the req 
    req = prompt("Enter ur request : ")

}