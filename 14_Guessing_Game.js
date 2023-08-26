//todo :- WAP to make a number guessing game which ask the user to enter the correct till the user enter the correct number.
const prompt = require("prompt-sync")();

//* If user wants to set the num limit for ex: 0 to _ (limit entered by user),
const numLimit = prompt("enter the number limit : ");

//* Generating random number,
const exactNum = Math.floor((Math.random() * numLimit) + 1);

//* conditions: 
console.log("Type Q for quit the game!");

//* Taking first input from user
let guessedNum = prompt("Guess the number : ");

//* additional case if user guessed the number correct in his first *
if (guessedNum === exactNum) {
  console.log("hurray! you've guessed it right");
}

while (guessedNum != exactNum && guessedNum != "Q") {
  //* Providing Hints :
  if (guessedNum < exactNum) {
    console.log("Hint : ur no. is smaller than the number.");
  }
  else {
    console.log("Hint : ur no. is larger than the number.");
  }

  //* Next Input :
  guessedNum = prompt("wrong guess!, please try again or quit : ");

  //* Checking second input ,
  if (guessedNum == exactNum) {
    console.log("hurray! you've guessed it right, num is : " + guessedNum);
  } else if (guessedNum == 'Q') {
    console.log("User has quit the game!");
  }
}

//! for console js

// //* If user wants to set the num limit for ex: 0 to _ (limit entered by user),
// const numLimit = prompt("enter the number limit : ");

// //* Generating random number,
// const exactNum = Math.floor((Math.random() * numLimit + 1));

// //* conditions:
// alert("Type Q for quit the game!");

// //* Taking first input from user
// let guessedNum = prompt("Guess the number : ");

// //* additional case if user guessed the number correct in his first *
// if (guessedNum === exactNum) {
//   alert("hurray! you've guessed it right");
// }

// while (guessedNum != exactNum && guessedNum != "Q") {
//   //* Providing Hints :
//   if (guessedNum < exactNum) {
//     alert("Hint : ur no. is smaller than the number.");
//   }
//   else {
//     alert("Hint : ur no. is larger than the number.");
//   }

//   //* Next Input :
//   guessedNum = prompt("wrong guess!, please try again or quit : ");

//   //* Checking second input ,
//   if (guessedNum == exactNum) {
//     alert("hurray! you've guessed it right, num is : " + guessedNum);
//   } else if (guessedNum == 'Q') {
//     alert("User has quit the game!");
//   }
// }
