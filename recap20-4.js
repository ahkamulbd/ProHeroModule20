function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        console.log(`${year} is a Leap Year.`)
    }
    else {
        console.log(`${year} is not a Leap Year.`)
    }
}

isLeapYear(1952);
isLeapYear(1921);