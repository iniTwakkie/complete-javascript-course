'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 123

// const if = 234;


function logger(){
    console.log('my name is Danie')
}

// calling , running or invoking the function
logger(123); 
logger(); 

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;

}

const appleJuice = fruitProcessor(3,4)
console.log(appleJuice)
console.log(fruitProcessor(1,2)) //same instead of using a variable.

const appleOrangeJuice = fruitProcessor(2,4)
console.log(appleOrangeJuice)

//function is just a value and not a type, so thats why we can store it as a variable

//function declaration (we can call them before they are defined...so weird compared to python)
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1)


// this first needs to be defined and then used.
//function expression - remember that expressions produce values
//after ES6 this is the preferred way to do it now
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

console.log(calcAge2(1991))