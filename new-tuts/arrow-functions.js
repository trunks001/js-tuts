let sum = (a, b) => a + b;
console.log(`Here is a simple arrow function for sum: ${sum(3,6)}`);

let doubleup = n => n * 2;
console.log(`Here is a sample for double with one parameter: ${doubleup(6)}`);

let oldway = function (a,b) {
    return a + b;
}

console.log(`The good old fashion way with func expressions: ${oldway(3,3)}`)

let readLine = require("readline-sync");
let age = readLine.question('WHat is your age, again?: ', {defaultInput: 12});

let welcome = (age < 18) ?
    () => console.log("Wattup kid") :
    () => console.log("Greetings sir");

welcome();

let sumV2 = (a, b) =>{
    let result = a + b;
    return result;
} 
console.log(sumV2(4,4));

// Q1
function ask(question, yes, no) {
    if (readLine.keyInYN(question)) yes();
    else no();
}

ask (
    "Do you agree?",
    () => console.log("You agreed once again."),
    () => console.log("You said no, we get it okay !!!")
);