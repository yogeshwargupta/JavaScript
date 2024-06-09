//JS shows prototypal behavior i.e get checking for outer space untill it gets null
//Access to new, this keyword, classes and protopypal inheritence is given bt Prototype
//Everything in JS is an object even Array, String & function too

function mulBy5(num){
    return num*5;
}

// console.log(mulBy5(5))
mulBy5.power = 2   //IN JavaScript, functions are first-class objects, which means you can attach properties to them just like any other object.
console.log(mulBy5.power);
console.log(mulBy5.prototype);   //In JavaScript, every function has a prototype property, which is used in prototypal inheritance. 
                                //This property initially points to an empty object, but you can add properties and methods to it to be 
                                //shared among all instances created with the constructor function.

function createUser(username, score){
    this.username = username   //Inside the constructor function, this.username assigns the username parameter passed to the function to the username property of the object being created. This means that when you create a new user object using createUser, you can specify the username as an argument, and it will be assigned to the username property of the object.
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;   //jisne bhi bulaay hai uska score badha do
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);   //jisne bhi manga hai uska score de do
}


const chai = new createUser('chai',25)
const tea = new createUser('tea',250)

chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and 
this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, 
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), the newly created object is returned.

*/