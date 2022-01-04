if ("0") {
    console.log( 'Hello' );
  }
// returned result because "0" is a full string, therefore truthy

let correctAnswer = "ECMAScript"

if (correctAnswer == "ECMAScript") {
    console.log("That answer is correct")
} else {
    console.log("You don't know man");
}

let inputNumber = +"22"

let guessedResult = (inputNumber > 0) ? console.log(1) :
(inputNumber < 0) ? console.log(-1) :
console.log(0);

let result = (a + b < 4) ? result = "Below" : result = "Over";

let message = (login == "Employee") ? "Hello" :
(login == "Director") ? "Greetings" :
(login == "") ? "No login" :
"";