const fs = require('fs');
const a=500;
setImmediate(()=> {
    console.log("Printing SetImmediate callback function ")
});


Promise.resolve(()=> console.log("Promise"));

fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading CB");

});

setTimeout(()=> {
    console.log("SetTimeout CB");
});

process.nextTick(() =>{
    console.log("Process Next Tick CB");
});

function printA(){
    console.log("a=",a);

}

printA();
console.log("This is the last message");


