    
    let year2 = 2025;
    let yearName = "";
    switch (year2) {
        case 2021:
            yearName = "Year of the Dog";
            break;
        case 2022:
            yearName = "Year of the Dragon";
            break;
        case 2023:
            yearName = "Year of the Rabbit";
            break;
        case 2024:
            yearName = "Year of the Turtle";
            break;
        default:
            yearName = "No year selected";
    }

    console.log(yearName);

// Sample Day Count per Month
let year = 2016;
let month = 2;
let dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1; // invalid month
}

console.log(dayCount); // 29