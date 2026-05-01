console.log("Hello World");

var a = 458258;
var b = 45828899;

setTimeout(() => {
    console.log("This is a message from setTimeout function");
},6000);

function multiplyFn(x,y){
    const result = a*b;
    return result;

}

var c = multiplyFn(a,b);
console.log("Result of multiplication is ", c);
