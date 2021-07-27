console.log("Hello World!\n==========\n");

//Reduce Method
// const numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum);

//Map Method
// let doubledFromNumbers = numbers.map((val) => val * 2);

// console.log(doubledFromNumbers);

//Parse data

// let contacts = [
//     {
//         name: "Ben",
//         email: "ben@email.com",
//         number: "+1 (123) 456-7890",
//     },
//     {
//         name: "Simon",
//         email: "simon@email.com",
//         number: "+1 (234) 123-4567"
//     }
// ]

// function callContact (contactList, action) {
//     for (let contact of contactList) {
//         action(`Calling ${contact.name} at ${contact.number}`)
//     }
// }

// callContact(contacts, console.log);

//Func Return Func

// function lessThan (number) {
//     return (testNumber) => number > testNumber;
// }
// let lessThan100 = lessThan(100);
// console.log(lessThan100(55));

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(num) {
  return (plusNum) => (plusNum += num);
}

let plus15 = plus(15);
console.log(plus15(10));
