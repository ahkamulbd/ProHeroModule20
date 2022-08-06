const myInches = 12;
const myFeet = myInches / 12;

console.log(myFeet);

// // Function to convert inches to feet 

// function inchToFeet(inches) {
//     const feet = inches / 12;
//     return feet;
// }
// // const dadaInches = 144;
// // const dadaFeet = inchToFeet(dadaInches);
// // console.log(dadaFeet);
// console.log(inchToFeet(144));

// Function to convert kilometer to miles:

function milesToKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}
const myKilometer = 132;
const myMiles = milesToKilometer(myKilometer);
console.log(myMiles.toFixed(1));