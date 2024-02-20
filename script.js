// 'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // creating NEW variable with the same name as outer scope variables
//       const firstName = 'Steven';

//       // reassinging outer scope's variable
//       output = 'NEW OUTPUT';
//       const str = `oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     // console.log(str);
//     console.log(millenial);
//     //   console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);

//HOISTING

//variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jons';
let job = 'teacher';
const year = 1991;

// funnctions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow(a, b));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
