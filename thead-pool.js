const fs = require("fs");
const crypto = require("crypto");


crypto.pbkdf2("password", "salt",5000000,50,"sha512",()=>{
    console.log("Password encrypted");
});

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading CB");
})


crypto.pbkdf2("password", "salt",5000000,50,"sha512",()=>{
    console.log("02 Password encrypted");
});
