console.log( null || 2 || undefined ); // 2

console.log( alert(1) || 2 || alert(3) ); // 1, then 2

console.log( 1 && null && 2 ); // null

console.log( alert(1) && alert(2)) // 1, then undefined

console.log( null || 2 && 3 || 4 ); // 3

let inputNumber = 18;
let checkAge = (inputNumber >= 14 && inputNumber <=90) ? true : false;
let notCheckAge = (!(inputNumber >= 14 && inputNumber <=90)) ? true : false;
let notCheckAgeV2 = (inputNumber < 14 && inputNumber > 90) ? true : false; 

if (-1 || 0) alert( 'first' ); // runs due to -1 being truthy
if (-1 && 0) alert( 'second' ); // does not run
if (null || -1 && 1) alert( 'third' ); // runs because && returns 1 then compares to null and results in returning third

