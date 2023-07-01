"use strict";
5 + 20;
// here 5 is operand, + is operator and 20 is operand.
// and combination of operator and operand are called expressions.

// There are 6 types of Operators in JavaScript-

// *****  1) Assignment Operator -  *****
// Assignment Operator is used to assign a valur to the left operand based on the value of right operand. Example -
const x = 5;
const y = 5;

// If you want to use === or == operator to compare x and y values then it will only work when they are not concatenated with
// anyone and is printed seperately. Example -
console.log("is x equals to y? " + x === y); // it retuens false.
console.log(x === y); // it returns true.
console.log(x == y); // it returns true.
// Solution is use `` to solve the issue. Example:
console.log(`Is x and y are equal? ${x === y}`);

// We saw above that how the assignment operator '=', '==', and '===' works.

// *****  2) Arithmetic Operator -  *****
// Arithmetic Operators takes numerical values (either literals or variables) as their operands and
// returns a single numeric value.

console.log("3+3? " + 3 + 3); // here '+' is addition operator.
console.log(`3-3? ${3 - 3}`); // here '-' is substraction operator.
console.log("12/3? " + 12 / 3); // here '/' is division operator.
console.log("3*3? " + 3 * 3); // here '*' is multiplication operator.
console.log("3%3? " + (3 % 3)); // here '%' is remainder operator. '%' is also called "modular operator".

// *** Important ***
// Increment and Decrement operator -
// Increment operator is used to increase the value of the operand either bt 1 or more. Example -
let xz = 5;
++xz;
console.log(`Increased Valued of x = ${xz}`);

// There are 2 types of increment and decrement operators -
// postfix - operand++ / operand-- (example xz++ or xz--)
// prefix - ++operand / --operand (example ++xz or --xz)

// postfix is not clear as of now so will  add later
// prefix changes the value of the operand immediately when the increment or decreament operator is applied.

// *****  3) Comparison Operator -  *****
const ab = 12;
const bc = "12";
console.log(`12 is equals to 12? ${12 == 12}`); // here '==' is quality operator. which check weather 2 operand are qeual or not.
console.log(`12's data type is equals to "12"s datatype?  ${12 === "12"}`); // here '===' is strict equality operator operator check weather the datatype of the operands are equal or not.
const cc = 32;
console.log(`"12" is not equals to 32? ${bc != cc}`); // here '!=' is remainder operator. '%' is also called "modular operator".
