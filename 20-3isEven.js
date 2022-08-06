function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        // console.log('Number is even')
        return true;
    }
    else {
        // console.log('Number is odd');
        return false;
    }
}
const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);

const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);