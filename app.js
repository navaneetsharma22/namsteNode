require("./xyz.js");
const obj =require("./sum.js");


var name = "Namste Node ";

var a=10;

var b=20;

obj.calculateSum(55,5);
console.log(obj.x);


// console.log(name);
// console.log(a+b);

//console.log(global);
// console.log(this);//its give empty object in node js but in browser it give window object

// console.log(globalThis); its give global object in node js and window object in browser


console.log(globalThis === global); //true
 
