function setUsername(username){
    //DB Call
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@google.com", "14032002")
console.log(chai);



/*
Here's a breakdown of the code:

setUsername Function:
setUsername(username): Defines a function setUsername that takes a username parameter.
Inside this function, there might be a database call (commented out in the code), and then it sets the username property of the context object (this) to the provided username.

createUser Function:
createUser(username, email, password): Defines a function createUser that takes username, email, and password parameters.
setUsername.call(this, username): Invokes the setUsername function with the this value set to the context object of the createUser function (which will be the newly created object when invoked with the new keyword), and passes the username as an argument.
Sets the email and password properties of the context object to the provided email and password values, respectively.

Object Instantiation:
const chai = new createUser("chai", "chai@google.com", "14032002"): Creates a new object chai by invoking the createUser function with the new keyword, passing "chai", "chai@google.com", and "14032002" as arguments.

Logging:
console.log(chai): Outputs the chai object to the console, showing its properties (username, email, and password) set by the createUser function.
In summary, this code allows for the creation of a user object with a specified username, email, and password, utilizing the setUsername function to set the username property while using call to ensure proper context and property assignment.
*/




