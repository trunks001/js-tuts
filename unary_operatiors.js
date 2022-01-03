// let num1 = 10;

// num1 = +num1;
// console.log("Number with +: ", num1);

// num1 = -num1;
// console.log("Number with -: ", num1);

// let str = "10";
// console.log("Number as a string with a +: ", typeof(+str));
// console.log("Number as a string with a +: ", +str);

// let product = {
//     valueOf: function () {
//         return NaN;
//     }
// };

// console.log("Object with a +: ", +product);

// let incNum = 23;
// console.log("Number before ++: ", incNum);
// console.log("Number after ++: ", ++incNum);

// let decNum = 30;
// console.log("Number before ++: ", decNum);
// console.log("Number after ++: ", --decNum);

// let x = 10;
// let y = 20;

// let z = x + --y;
// console.log(z);

let i = 10;
let j = 20;
let m = i-- + j;
console.log(m);
console.log(i);

i = 10;
let n = --i + j;
console.log(i);
console.log(n);
console.log(i);


let b = true;
console.log(+b);

let f = {};
f.name = "Joe";
console.log(-f);