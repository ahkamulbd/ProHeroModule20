// function factorial(number) {
//     let factorialResult = 1;
//     for (let i = number; i >= 1; i--) {
//         factorialResult = factorialResult * i;
//         console.log(i, factorialResult);
//     }
//     return factorialResult;
// }
// factorial(7);

// Factorial Programme with while loop

function factorial(number) {
    let factorialResult = 1;

    let i = number;
    while (i >= 1) {
        factorialResult = factorialResult * i;
        console.log(i, factorialResult);
        i--;
    }
    return factorialResult;
}
factorial(5);