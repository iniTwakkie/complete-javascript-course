// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
const y = 'Johan';

const calcAge = birthYear => 2037 - birthYear;

function calc1() {
  console.log('suck it');
}
console.log('dickit');

console.log(calc1());

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//diff between highest and temp

// we first need to see if all values are values
// then sort it high to low,
// then take the lower and highest, add together and div by 2

//
// console.log(temperature[0]);

console.log(typeof temperature[0]);

const calcTempAmplitude = function (arr) {
  let clean_data = [];
  for (let i = 0; i < arr.length; i++) {
    let arr_type = typeof arr[i];

    console.log(arr_type);

    if (arr_type == 'number') {
      clean_data.push(arr[i]);
    } else continue;
  }
  clean_data.sort((a, b) => a - b);

  let max = clean_data[clean_data.length - 1];
  let min = clean_data[0];

  let amplitude = max - min;

  console.log(arr);
  console.log(clean_data);
  console.log(amplitude);
};

calcTempAmplitude(temperature);
