
for (var count = 1; count <= 5 ; count++ ) {
    console.log("The current inside loop is: ", count);
}

console.log("The current outside loop is: ", count);

let j = 1;

for ( ; ; ) {
    console.log("Loop without initializer inside loop is:  ", j);
    if (j > 4) {
        break;
    }
    j += 2;
}

outer : for (let i = 1; i < 10; i++) {
    console.log("using a label for a loop statement: ", i);
    if (i == 5) {
        break outer;
    }
}

let iterations = 0;
top : for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            iterations++;
            if (i == 2 && j == 2) {
                break top;
            }
        }
}
console.log("Here are the number of iterations using break at top:", iterations);

let s = "This is a Javascript continue statement demo";
let counter = 0;
for (let i =0; i < s.length; i++) {
    if (s.charAt(i) != 's') {
        continue;
    }
    counter++;
}
console.log("The number found of s characters found in the string are: " + counter);