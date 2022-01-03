
let isPending = true;
let isDone = false;

console.log(typeof(isPending));
console.log(typeof(isDone));

let message = Boolean("Hello World");
console.log(message);
console.log(typeof(message));

let bObj = new Boolean(false);
console.log(bObj);
console.log(bObj.valueOf());
console.log(bObj.toString());

let completed = true;
let active = new Boolean(false);

active.primitiveValue = active.valueOf();
console.log(active.primitiveValue);

completed.name = "Hello World Again";
console.log(completed.name);

console.log(typeof completed);
console.log(typeof active);

console.log(completed instanceof Boolean);
console.log(active instanceof Boolean);

// Never do this 
let falseObj = new Boolean(false);
if (falseObj) {
    console.log("This part might run by accident even though boolean condition is false")
}