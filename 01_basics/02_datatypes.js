"use strict"; // Treats all JS code as newer version

// alert(40+2);
//we are using node js not browser.

console.log(3 + 3); // code readability should be high

console.log("harsh");

let name = "harsh";
let age = 24;
//let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value - when no any value is returned or empty value returned this is called null
// undefined => value has been not defined
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//----------------------------------------------------------------------------------------------------------------------------------

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
