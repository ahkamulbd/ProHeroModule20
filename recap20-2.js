// // Convert Inches to Feet

// function inchesToFeet(inches) {
//     var feet = inches / 12;
//     return feet;
// }

// const playerInches = 72;
// const playerFeet = inchesToFeet(playerInches);
// console.log(playerFeet);

// Convert Miles to Kilometer

function milesToKilometer(miles) {
    var Kilometer = miles * 1.61;
    Kilometer = parseFloat(Kilometer.toFixed(61));
    return Kilometer;
}

const milesWalkingDistance = 5;
const KilometerWalkingDistance = milesToKilometer(milesWalkingDistance);

console.log(KilometerWalkingDistance);
