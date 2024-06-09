const user = {
    username: "Yogesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
       //console.log('Got user details from DB'); 
       //console.log(`Username: ${this.username}`);
       console.log(this);
    }
}

//console.log(user.username);
// console.log(user.getUserDetails());
//console.log(this);

// const promiseone = new Promise()   // new-->Constructor function: It allows to make multiple instances out of one object literal
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount= loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this //this is implicitly defined
}

const userone = new User("Yogesh", 122, true)
const usertwo = new User("Yoshi", 1221, false)   //usertwo will overwrite the values of userone, 'new' keyword will solve the problem

console.log(userone.constructor);  //constructor: khud hi ke bare me ek reference
console.log(usertwo);               //Above line logs the constructor property of the userone object. The constructor property refers
             // to the constructor function that created the object. In this case, it will log the User constructor function.



console.log(userone instanceof User); //This line checks if userone is an instance of the User constructor function. It returns true because
                                      //userone was created using the User constructor.

// Note- As soon as new word is writeen an empty boject i.e. instance is create
// - due to new keyword a new constructor function is called
// - all the argument which is written in this keyword is injected in that instance
// - we get that instance in our function

//Note- instanceof is a JavaScript operator that allows you to check if 
//an object is an instance of a particular class or constructor function. 
//It returns true if the object is an instance of the specified class or constructor, otherwise it returns false.