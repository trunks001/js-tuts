"use strict"
function showMessage(from = "Gcina", text = "no text given") {
    console.log(from + ": " + text);
}

showMessage(); // no text input parameters given at all


function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        console.log(`Here are the prime numbers in seperate functions: ${i}`);  // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

let n = 20;
isPrime(n);
showPrimes(n);

// Q2

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// Q3
function minNum(a,b) {
   return (a < b) ? a : b 
}

let result = minNum(3,-1)
console.log(result);

// Q4
function pow(x,y) {
    let result = x;
    for (let i=1; i < y; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(3, 3));