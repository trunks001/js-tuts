let cond = "hello";

if (cond == "hello") {
    console.log("Hello there young one");
} else if (cond === true) {
    console.log("Don't really know what I'm saying");
} else {
    console.log("No greeting for you sorry");
};

// shorthand if_else
let isLoggedIn = false ? "Logout" : "Login";

let shortcond = false  ? console.log("Hello there quick") : console.log("Sorry nothing happening here");

let age = 25;
let canDrive = age > 16 ? "yes" : "no";