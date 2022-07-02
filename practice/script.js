// values and variables

/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
let first = 'jonas'
let firstNamePerson
let first_name_person


console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let person = 'jonas'
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'teacher';
// make sure variables are descriptive

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/


// // Booleans

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');


// // we reassigned the variable javascriptIsFun and you don't need to use let when we change the variable.  Showing an example of dynamic typing
// javascriptIsFun = 'Yes!';
// console.log(typeof javascriptIsFun);


// let year;
// console.log(year); /*undefined*/
// console.log(typeof year); /*data type undefined*/

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// reassigning a value to a variable or mutate a variable and perfect use case of let
// let age = 30;
// age = 31;


// const can't mutate
// const birthYear = 1991;
// birthYear = 1990;

// const job;

// guy reccommends using const as default and let when you know that the variable can change
// var is the old way of defining variables, don't use var

// var job = 'programmer';
// job = 'teacher'





// TEMPLATE LITERALS

// const firstName = 'Ben';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037

// // const ben = "I'm " + firstName + ', a ' +  (year - birthYear) + ' years old ' + job + '!";
// // console.log(Ben); // couldn't even get this right

// const benNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(benNew);

// console.log(`Just a regular string...`)

// console.log('String with \n\
// multiple \n\
// lines'); 
// // the above isn't needed anymore

// console.log(`String 
// multiple
// lines`);



// IF/ELSE STATEMENTS

// const age = 15;
// const isOldEnough = age >= 18;

// if(age >= 18) {
//     console.log('Sara can start driving');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sara is too young.  Wait another ${yearsLeft} years.`);
// }

// const birthYear = 1996;
// let century; 
// if(birthYear <= 2000) {
//      century = 20;
// } else {
//      century = 21;
// }
// console.log(century);


// CODING CHALLENGE #2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95


// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// // const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn);


// if(BMIMark > BMIJohn) {
//     console.log(`Marks BMI (${BMIMark}) is higher than Johns (${BMIJohn})!`)
// } else {
//     console.log(`Johns(${BMIJohn}) BMi is higher than Marks(${BMIMark})`);
// }

// // TYPE CONVERSION 
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);


// console.log(Number('Jonas')) // NaN
// console.log(typeof NaN); // it's a number, but an invalid number lol

// console.log(String(23), 23); // white value in console is a string


// // TYPE COERCION
// console.log('I am ' + 23 + ' years old')
// console.log('23' - '10' - 3) // js converts strings to numbers with the minus operator.  + converts numbers to strings
// console.log('23' * '2') // converted to numbers.  

// let n = '1' + 1; // string of '11'
// console.log(n)
// n = n - 1; // js converts strings to numbers with th minus operator, so 11 - 1 = 10
// console.log(n);

// '10' - '4' /*two strings subtracted from each other turns into a number*/ - '3' /* the number 6 - string 3 equals number 3*/ - 2 /*number is number is a number*/ + '5' /*concatenate the number one to the string of 5 gives me 15.*/



// Truthy and Falsy values 

// // falsy values are values that aren't exactly false but become false when converted into a boolean
// // 5 fasly values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//     console.log('Dont spend it all')
// } else {
//     console.log('u should get a job')
// }

// let height; // height is undefined, so if converted to a boolean, it is a falsy value
// if(height) {
//     console.log('yay')
// } else {
//     console.log('Height is UNDEFINED')
// }



// // EQUALITY OPERATORS
// const age = 18;
// if(age === 18) console.group('You just became an adult') 

// 18 === 18 // true
// 18 === 19 // false
// '18' == 18 // true
// '18' === 18 // false

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favorite = prompt('Whats your favorite number?');
// console.log(favorite)

// if (favorite == 23) {
//     console.log('cool')
// } else if(favorite === 7) {
//     console.log('7 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7')
// }

// if(favorite !== 23)console.log('why not 23?')



// BOOLEAN LOGIC - branch of computer science, not specific to JS
// review this as it didn't make much sense




// LOGICAL OPERATORS

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense || hasGoodVision) // true
console.log(hasDriversLicense && hasGoodVision) // false
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision

// if(shouldDrive) {
//     console.log('Sara is able to drive')
// } else {
//     console.log('someone else can drive')
// }

// const isTired = true; 
// console.log(hasDriversLicense && hasGoodVision && isTired)


// if(hasDriversLicense && hasGoodVision && isTired) {
//     console.log('Sara is able to drive')
// } else {
//     console.log('someone else can drive')
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins)
// console.log(scoreKoalas)

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins = scoreKoalas) {
//     console.log('Both win the trophy');
// }  

// BONUS 1  

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins)
// console.log(scoreKoalas)

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the trophy');
// } else {
//     console.log('No one wins the trophy');
// }




// // ARRAYS AND DESTRUCTURING
// 'use strict';

// const restuarant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'pasta', 'risottto'],

//     order: function(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     }
// };

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z)
// console.log(arr);

// let [main, , secondary] = restuarant.categories;
// console.log(main, secondary);

// // switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(secondary, main);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // recieve 2 return values from a function
// const [starter, mainCourse] = restuarant.order(2, 0);
// console.log(starter, main);


// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);



// // looping over arrays


// // for of loop
// const menu = [...restuarant.starterMenu, ...restuarant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`);
// }

// // console.log(...menu.entries());



// // SETS - collection of unique values

// const ordersSet = new Set([
//     'pasta', 
//     'pizza', 
//     'pizza', 
//     'risotto', 
//     'pasta', 
//     'pizza'
// ]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('bread'));
// ordersSet.add('garlic bread')
// ordersSet.add('garlic bread')
// ordersSet.delete('risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for(const order of ordersSet) console.log(order);

// // example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffUnique = [...new Set(staff)]; // spread operator uses ...
// console.log(staffUnique);

// console.log(
//     new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// );

// // console.log(new Set('jonas').size);



// SIMPLE ARRRAY



'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];


// // SLICE METHOD
// console.log(arr.slice(2));
// console.log(arr.slice(2,4)); // end parameter isn't included
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE METHOD - mutates array/changes array
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1,2);
// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters)
// console.log([...arr, ...arr2]);

// // JOIN method
// console.log(letters.join(' - '));


// THE NEW AT METHOD
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));


// getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(-1));

