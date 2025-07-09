

// const jonas = {
//     firstName: "Jonas",
//     birthYear: 1991,
//     friends: ["Aj", "Seb", "Lady"],
//     hasDriversLicense: true,
//     job: "teacher",

// // called a method (its basically a function but just in an object)
//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
    
    

//     getSummary: function () {
//         // let drivers = "";    
//         // if (this.hasDriversLicense) {
//         //     drivers = "a";
//         // }else drivers = 'no';
//         // console.log(drivers)

//         return `${this.firstName} is ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }

// }

// console.log(jonas.firstName)

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}`)

// console.log(`${jonas.firstName}`)

// console.log(jonas.getSummary())




// //Challenge 3 - Objects

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass/(this.height * this.height);
//         return this.bmi
//     },
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     // bmi: 0,
//     calcBMI: function () {
//         this.bmi = this.mass/(this.height * this.height);
//         return this.bmi;
//     },
// }

// // console.log(mark.calcBMI())
// // console.log(john.calcBMI())

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`)
// } else {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`)
// }


//Loops Final topic
//Loop will keep running while condition is TRUE

// for (let rep = 1; rep <= 10; rep += 1) {
//     console.log(`Rep ${rep}`)
// }
 
// this is an array and not an OBJECT look at []
// const jonasA = [
//     'Jonas',
//     'Nell',
//     1,
//     10-3,
//     'teacher',
//     ['apple','banana','cherry'],
//     true
// ]

// const types = []

// for (let i = 0 ; i < jonasA.length ; i+=1) {
//     console.log(jonasA[i], typeof jonasA[i])
    
//     // Option1 to add info
//     // types[i] = typeof jonasA[i]

//     // Option2 to add info = preferred
//     types.push(typeof jonasA[i])
// }

// console.log(jonasA.length)
// console.log(types)



// const years = [1991,2007,1969,2020];
// const ages = []

// for (let i = 0; i < years.length; i+=1) {
//     ages.push(2025 - years[i])
// }

// console.log(ages)





// //Continue and Break in a Loop
// console.log('-------Only Strings------')
// for (let i = 0 ; i < jonasA.length ; i+=1) {
//     if (typeof jonasA[i] !== 'string') continue;

//     console.log(jonasA[i], typeof jonasA[i])} // if continue is reached it will



// //Break
// //after a number is found we dont want anything else to be shown.
// console.log('-------Break with Number------')
// for (let i = 0 ; i < jonasA.length ; i+=1) {
//     if (typeof jonasA[i] === 'number') break;

//     console.log(jonasA[i], typeof jonasA[i])} // not even this is printed when its a break





///Looping backwards...

// const jonasA = [
//     'Jonas',
//     'Nell',
//     1,
//     10-3,
//     'teacher',
//     ['apple','banana','cherry'],
//     true
// ]

// 0,1,2,3,4
// 4,3,2,1,0

//For (part1, part2, part3)
// part 1 = starter
// part 2 = (condition) for what condition should JS still run> 
// 

// for (let i = jonasA.length - 1 ; i >= 0 ; i-=1) {
//     console.log(jonasA[i]) 
// }


// let dice = Math.trunc(Math.random() * 6)+1

// // console.log(dice)

// while (dice !== 6 ) {
//     console.log(`You rolled a ${dice}`)

//     dice = Math.trunc(Math.random() * 6)+1;
//     if (dice === 6 ) { console.log('Loop is about to end...')}
// }

//Final coding challenge4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []

const totals = []

for (let i = 0; i < bills.length ; i++) {
    const tip = calcTip(bills[i])
    tips[i] = tip
    totals[i] = bills[i] + tip
    console.log(bills[i], tips[i], totals[i])
}


const calcAverage = function (arr) {
    let total_sum = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        total_sum += arr[i]
    }
    return total_sum / arr.length
}

console.log(bills)
console.log(tips)
console.log(totals)
console.log(calcAverage(totals))