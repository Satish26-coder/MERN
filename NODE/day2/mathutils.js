console.log("mathUtils.js module (named exports version) is loading....");
  const add=(num1,num2)=>num1+num2;
  const subtract=(num1,num2)=>num1-num2;
  const PI = 3.14;
  exports.addFunction = add;
  exports.subtractFunction = subtract;
  exports.PI = PI;
  exports.gravityConstant = 9.8;
  
  //module.exports=add;
  

  /*module.exports = {
    addFunction: add,
    subtractFunction: subtract,
    PI: PI,
    gravityConstant: 9.8
  };*/  