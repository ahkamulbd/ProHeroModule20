function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        //console.log('Your year is a leap year', year);
        return true;
    }
    else {
        //console.log('Your year is not a Leap year', year);
        return false;
    }
}
const isMyYearLeapYear = isLeapYear(1933);
console.log(isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log(isHerYearLeapYear);