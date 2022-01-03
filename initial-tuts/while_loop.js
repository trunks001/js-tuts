let count = 1;

while (count < 10) {
    console.log("Here is the current count: ", count);
    count += 2;
};

let rands = [];
let othercount = 0;
const size = 5;

while (othercount < size) {
    rands.push(Math.round(Math.random() * 100));
    othercount++;
    console.log('The current size of the array is: ', + othercount);
}

console.log("Here are the random numbers", rands);