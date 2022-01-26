// Q1
let browser = ""
if (browser == "Edge") {
    console.log("You've got the edge")
} else if (browser == "Firefox" || browser == "Chrome" || browser == "Safari" || browser == "Opera") {
    console.log("okay we support these browsers too");
} else {
    console.log("We hope that this page looks ok, good luck");
}

// Q2
let a = 3
switch (a == 3) {
    case (a == 0) :
        console.log(0)
    case (a == 1) :
        console.log(1)
    case (a == 2 || a == 3) :
        console.log('2,3');
    break;
    default:
        console.log('');
}
