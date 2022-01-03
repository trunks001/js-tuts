let count = 0;

do {
    count+=2;
    console.log("The current count is: ", count);
} while (count < 10)

const MIN = 1;
const MAX = 12;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0;
let hint = '';
let number = 0;

const prompt = require("prompt-sync")();

do {
    // get number from the user input
    let input = prompt(`Please enter a number between ${MIN} and ${MAX}: `);
    // get and store the guessed integer 
    number = parseInt(input);
    // increase the numnber of guesses after user input
    guesses++;
    // check the input with the secret number
    // provide hint if needed
    if (number > secretNumber) {
        console.log("The guessed number is a little too high")
    } else if (number < secretNumber) {
        console.log("The guessed number is a little too low");
    } else if (number == secretNumber) {
        console.log(`Congrats you've guessed the secret number ${secretNumber} correctly after ${guesses} guesses, well done mate`);
    }
} while (number != secretNumber);