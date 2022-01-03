let str = "Hello there";
let message = `Gcina, ${str}`;
console.log(message);

let specialstr = 'I\'m a special string';
console.log(specialstr);
console.log(specialstr.length + " length of string");

console.log(specialstr[6]);

let otherstr = new String("Javascript String Type");

console.log(otherstr.length);
console.log(otherstr.valueOf());
console.log(otherstr.toString())
console.log(otherstr.toLocaleString());
console.log(otherstr.toUpperCase())

let firstname = "John"
let fullname = firstname.concat(" ", "Doe", " Was here somehow");
console.log(fullname);

let thirdstring = "Javascript String to test sub string extract on";
console.log("Here is the length of the substring string: ", thirdstring.length)
console.log("Here is a substring sample: ", thirdstring.substring(5,25));

let fourthstring = "This is a dummy string";
console.log("Looking for the index / part of the sentence which says 'is': ", fourthstring.lastIndexOf("rap"));

let strtrim = "Hi        ";
console.log(strtrim);

let strippedstr = strtrim.trimStart();
console.log(strippedstr)

let lowerstr = "all chars are in lower case at the moment";
console.log("Return the srting all uppercase wallah: ", lowerstr.toUpperCase());

console.log("z".localeCompare("c"));

console.log("B".localeCompare("B"));

let expr = "1 + 2 + 3";
let matches = expr.match(/\d+/g);
console.log(matches);

let fifthstr = "This is a test of search()";
let position = fifthstr.search(/search/);
console.log(position); 

let laststr = "The baby rocks the boat baby";
// replace the with a
let replacedstr = laststr.replace(/the/g, "a");
console.log(replacedstr);

let fullstring = "The new world 1 is the old world 2 with the pig 3 lipstick";
let splitstring = fullstring.split(/([1,2,3])/,5);
console.log(splitstring);

let emailaddress = "jondoe@gmail.com";
let domain = emailaddress.substring(emailaddress.indexOf("@") + 1);
console.log(domain);

let email2 = "john@example.com"
let localPart = email2.slice(0, email2.indexOf("@"));

console.log(localPart);

let lateststr = "  |  JS is here   |     "
let trimresult = lateststr.trim();
console.log(trimresult);
