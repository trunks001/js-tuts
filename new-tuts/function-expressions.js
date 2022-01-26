"use strict"
function sayHi() {
    console.log("Hello");
}

sayHi();

let sayHiV2 = function(from) {
    console.log(from + ": " + "Hello again");
} 

sayHiV2("Gcina");

let message = function(num) {
    console.log(num + "Just practicing don't mind me heheheheh")
}

message(123);

let readLine = require("readline-sync");
function ask(question, yes, no) {
    if (readLine.keyInYN(question)) yes();
     else no();
}

function showOk() {
    console.log("You agreed.");
}

function showCancel() {
    console.log("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);

ask(
    "Do you agree V2",
    function () { console.log("You agreed again hehehehe"); },
    function () { console.log("You rejected us again lol"); }
);