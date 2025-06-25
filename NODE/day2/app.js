console.log("app.js is starting...(for named exports version)");

const { addFunction,
  subtractFunction,
  PI,
  gravityConstant
} = require('./mathutils.js');

console.log("sum:", addFunction(10, 20));
console.log("difference:", subtractFunction(20, 10));
console.log("PI:", PI);

/*const anyName = require('./mathutils.js');
console.log("back in app.js, after require.");
let number1 = 10;
let number2 = 20;
let result = anyName(number1, number2);
console.log(`result of adding ${number1} and ${number2} is: ${result}`);
/*
Named exports:exporting multiple functions or variables
method1: using module.exports*/
