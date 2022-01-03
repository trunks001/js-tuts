// let eligible = false;
// let required = true;

// console.log(!eligible);
// console.log(!required);

// console.log(!undefined); // true
// console.log(!null); // true
// console.log(!20); //false
// console.log(!0); //true
// console.log(!NaN); //true
// console.log(!{}); // false
// console.log(!' '); //true
// console.log(!'OK'); //false
// console.log(!false); //true
// console.log(!true); //false 

console.log(typeof(!!' ')); //true
console.log(typeof(!'OK')); //false
console.log(!!false); //true
console.log(!!true); //false 

let b = true;
let result = b && (1 / 0);
console.log(result);

let val1 = false;
let val2 = !true;
let val3 = false;
console.log(val1 || val2 || val3);

