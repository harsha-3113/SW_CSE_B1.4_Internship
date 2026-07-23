// Variables in JS
var x = 10;
var x = 20;
x = 30;
console.log(x)

if (true) {
    var message = "Hello";
}
// var in JS is not block-scoped
console.log(message);

// ****************************************************
// let keyword based variable
let score = 100;
//let score = 100; //SyntaxError: Identifier 'score' has already been declared
score = 160; // re-assignment is valid
console.log(score)

if(true){
    let secret = "Password@123"; // let in JS is block-scoped
}
//console.log(secret); //ReferenceError: secret is not defined

// const: variable which cannot be reassignned after its declaration
if(true){
    const pi = 3.14159;
    //pi = 27 //TypeError: Assignment to constant variable.
}
// const in JS is block-scoped //ReferenceError: pi is not defined
console.log(pi) 