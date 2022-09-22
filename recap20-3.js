function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isNumberEven = isEven(78);
console.log(isNumberEven);

const isNumberOdd = isEven(99);
console.log(isNumberOdd);