// Q1:
// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// Answer
// a = 2
// b = 2
// c = 2
// d = 1

//Q2:
let a = 2;

let x = 1 + (a *= 2);

// Answer
// a = 4
// x = 5

// Q3

"" + 1 + 0 // 10
console.log("" - 1 + 0) // -1 (0 - 1 + 0)
true + false // 1 (1 + 0)
6 / "3" // 2 (6 / 2)
"2" * "3" // 6 (2 * 3)
4 + 5 + "px" // 9px ( 4 + 5 px)
"$" + 4 + 5 // $45
"4" - 2 // 2 (4 -2)
"4px" - 2 // NaN
"  -9  " + 5 // " -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

let readLine = require("readline-sync");
let f = readLine.prompt("First number?", 1);
let g = readLine.prompt("Second number?", 2);

console.log(+f + +g); // 12
