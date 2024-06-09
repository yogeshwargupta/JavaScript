// Primitive Data Types(non reference type)

// Data Types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Note- JavaScript is Dynamically Typed Langauage

const score = 100
const scoreValue = 100.3

const isLogged= false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

//const BigNumber=23747334455333434;
console.log(typeof(BigNumber))


// Reference Type or non Primitive data type

//1-Array
const heros = ["Shaktiman", "Nagraj", "Bheem", "Doga"]

//2-Objects
let myObj = {
    name: "Yogesh",
    age: 22,
}
console.log(typeof(heros))
console.log(typeof(myObj))  

//3-Functions
const myFunction = function(){
    console.log("Ram Ram Bhai Sarane");
}
myFunction();
console.log(typeof(myFunction))