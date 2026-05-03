const crypto = require("node:crypto");
console.log("Starting blocking code...");

var a = 458258;
var b = 45828899;

// pdkdf2 - password-based key derivation function 2
// it is a key derivation function that is designed to be computationally expensive and resistant to brute-force attacks. 
// It is commonly used for securely hashing passwords and generating cryptographic keys from passwords.


//pbkdf2Sync is a synchronous version of pbkdf2, it blocks the event loop until the key is generated
crypto.pbkdf2Sync("password", "salt",5000000, 50, "sha512");
console.log(" First key is generated ");

setTimeout(() => {
    console.log("This is a message from setTimeout function");
}, 60);
//it will be only call be called up when once main thred is empty;



//Asynchronous version of pbkdf2
crypto.pbkdf2("password", "salt",500000, 50, "sha512", (err,key) =>{
    console.log("key is generated ");

});

function multiplyFn(x,y){
    const result = a*b;
     return result;

}

var c = multiplyFn(a,b);
console.log("Result of multiplication is ", c); 