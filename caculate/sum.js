//Module protectect their variable and function from leacking to global scope. It is like a container which contains some code and we can export that code to other file and we can import that code in other file. It is like a box which contains some code and we can export that code to other file and we can import that code in other file.

console.log("This is sum.js file");

var X ="Namste Node "

function calculateSum(a,b){
     
    const sum = a + b;
    console.log(sum);

}

// module.exports = {
//     X ,calculateSum

// }

//individualy export function and value 
module .exports.X = X;
module.exports.calculateSum = calculateSum;