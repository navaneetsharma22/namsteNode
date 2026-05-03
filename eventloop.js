const fs = require ("fs");

const a= 100;


setImmediate(()=> console.log("This is a message from setImmediate function")); 

fs.readFile("./file.txt" , "utf8" , () =>{
    console.log("This is a message from readFile callback function");
});

setTimeout(()=>{
    console.log("This is a message from setTimeout function");
},0);

function printA(){
    console.log("a=" ,a);

}

printA();
console.log("this is the last message");

