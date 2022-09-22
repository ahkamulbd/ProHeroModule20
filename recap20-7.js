// // Programme for adding 1 to 7

// function sumOfNumbers(number) {
//     let sum = 0;
//     for (let i = 0; i < number; i++) {
//         sum = sum + i;
//         console.log(i, sum);
//     }
//     return sum;
// }
// sumOfNumbers(7);

// Programme for multiplication from 1 to 7 i.e. Factorial 

function multiplicationOfNumbers(number) {
    let multiplication = 1;
    for (let i = 1; i <= number; i++) {
        multiplication = multiplication * i;
        console.log(i, multiplication)
    }
    return multiplication;
}
multiplicationOfNumbers(7);