const fs = require("fs");
const https = require("https");

console .log("Hellow World");

var a = 17789;
var b= 8877;

//call api

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("Frontend Data Loaded from API");
});

setTimeout(() => {
    console.log("setTimeout called after 8 Sec");

},5000);
//Synchronaus 
//fs.readFile("./file.txt","utf8");
                                                        0
//file read 
fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("FileData : ",data);
});


function multiplyfn(x,y){
    const result = a*b;
    return result ;

}

var c =multiplyfn(a,b);
console.log("Multiplication Result : ",c); 