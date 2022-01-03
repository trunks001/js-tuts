"use strict"
let x = 60,
    y = 20;

function sayHello() {
    // local variable
    message = "Hi there";
    // return message;
    console.log(message);
}

sayHello();
console.log(message);

console.log(message);

function add(num1,num2){
    return num1 + num2;
}

function testFuntion() {
    let newMessage = "Hi there";
    return newMessage;
}

console.log(testFuntion());

function divide(num1, num2){
    if (num1 == 0 || num2 == 0) {
        throw 'Division by zero not allowed'
    }

    return num1 / num2;
}

let addresult = add(x,y);
console.log("Addition result: ", addresult);

let divideresult = divide(y,x);
console.log("Division result: ", divideresult);

let list = ['apple','pear','kiwi'];
console.log('Array list: ', list.length);

for (let listitem of list) {
    console.log(listitem);
}
