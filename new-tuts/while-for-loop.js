"use strict"
let i = 0;

while (i < 5) {
    console.log("The while loop counts: ", i);
    i++;
}

let a = 0;

do {
    console.log("The do while loop counts: ", a);
    a++;
} while (a < 6)


for (let i = 0; i < 6; i++) {
    console.log(`The for loop counts: ${i}`);
}

// Q1
let x = 3;

while (x) {
  console.log( x-- );
} // 3, 2, 1 : x starts as 3 then post decreases on each increment until 0 which is falsy (which is skipped) 

// Q2
let iv = 0;
while (++iv < 5) console.log(`IV loop: ${iv}` ); // 1, 2, 3, 4

let iy = 0;
while (iy++ < 5) console.log("IY loop: ", iy ); // 1, 2, 3, 4, 5 due to post increment 

// Q3
for (let i = 0; i < 5; i++) console.log("Q3 loop: ", i ); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) console.log( i ); // 0, 1, 2, 3, 4

// Q4

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
    console.log("Here is the Q4 loop counting even numbers from 2 to 10: ", i);
    }
}

// Q5 

let im = 0;
while (im < 3) {
    console.log(`number ${im}`);
    im++;
}

// Q6
let n = 20;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

    for (let j = 2; j < i; j++) { // look for a divisor..
        if (i % j == 0) continue nextPrime; // not a prime, go next i
    }

    console.log(i); // a prime
}
