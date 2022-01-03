"use strict"
// let counter
// console.log(counter);
// console.log("Type of: ", typeof(counter));

// counter = false;
// console.log("Type of: ", typeof(counter));

// counter = "foobar";
// console.log("Type of: ", typeof(counter));

// let obj = null;
// if (obj == null) {
//     console.log("object is null");
//     console.log(null == undefined);
// }
// console.log("Type of: ", typeof(obj));

// let num = 100;
// console.log("num num: ", num);

// let oct = 050;
// console.log("oct num: ", oct);

// let d = 090; 
// console.log("d num: ", d);

// let v = 0o45;
// console.log("v num: ", v);

// let h = 0x9A;
// console.log("h num: ", h);

// let f1 = 33.6;
// console.log("f1 num: ", f1);

// let f2 = 1002.3;
// console.log("f2 num: ", f2);

// let f3 = 200.00;
// console.log("f3 num: ", f3);

// let f4 = 2.17e7;
// console.log("f4 num: ", f4);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(-Number.MAX_VALUE);
// console.log(Number.MIN_VALUE - Number.MIN_VALUE);

// let greeting = 'Hi';
// let s = "It's a working string";
// s = s + " try and switch it up";
// console.log(s);

// let inProgress = true;
// inProgress = false;
// console.log(inProgress);
// let completed = false;
// console.log(completed);
// console.log(typeof completed);

// console.log("Boolean string:", Boolean('Hello there with a string'));
// console.log("Boolean empty string:", Boolean(""));
// console.log("Boolean empty space string:", Boolean(" "));
// console.log("Boolean NaN string:", Boolean(NaN));
// console.log("Boolean Number string:", Boolean(1200));
// console.log("Boolean negative Infinity string:", Boolean(-Infinity));
// console.log("Boolean zero string:", Boolean(0));
// console.log("Boolean negative zero string:", Boolean(-5000));

// let symbol1 = Symbol();
// console.log(symbol1 === Symbol());

// let symbol2 = Symbol("event.save");
// console.log(symbol2.toString());

// const click = Symbol("click");
// console.log(click.toString());

let emptyObject = {};
console.log(emptyObject);

let person = {
    firstName: "Gcina",
    lastName: "Zondi"
};

function showPerson() {
    let person = {
        "first-Name": "Joe",
        lastName: "Biden",
        location: {
            country: "USA",
            personality: "Slow and steady"
        }
    };
    console.log("another console before return");
    return "Here is the country using return: " + person.location.country;
    console.log("another console after return")
}
console.log(showPerson());

console.log(person);

let consumer = new Object();
consumer.name = "Hello Names";
console.log(consumer);

let newNumber = Number("2000");
console.log(newNumber);
console.log(typeof(newNumber));
