require("./xyz.js");
//const { calculateSum} =require("./sum.js");

//import { X ,calculateSum } from "./sum.js";
//const {X, calculateSum} = require("./caculate/sum.js");

//const calculateMultiply = require("./caculate/multiply.js");

//import using require function multipal function at ones 
const {calculateSum, calculateMultiply} = require("./caculate/index.js");

//importing Json File 
const data = require("./data.json");

console.log(data);


var name = "Namste Node ";

var a=10;

var b=20;

calculateSum(55,5);
calculateMultiply(a,b);

//console.log(X);


// console.log(name);
// console.log(a+b);

//console.log(global);
// console.log(this);//its give empty object in node js but in browser it give window object

// console.log(globalThis); its give global object in node js and window object in browser


//console.log(globalThis === global); //true
 
