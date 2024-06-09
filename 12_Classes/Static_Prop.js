class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const yoshi = new User("Yogesh")
//console.log(yoshi.createId())


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iphone","iphone@gmqil.com")
iPhone.logMe()
console.log(iPhone.createId())

/*
In this code, you've defined two classes: User and Teacher, which demonstrate inheritance and static methods in JavaScript classes.

User Class:
The User class has a constructor that takes a username parameter and assigns it to the username property of the instance being created.
It also has a method logMe() that logs the username of the instance to the console.
Additionally, there is a static method createId() that returns a hardcoded ID value "123". Static methods are called on the class itself, not on instances of the class.


Teacher Class (Extends User):
The Teacher class extends the User class, meaning it inherits properties and methods from the User class.
Its constructor takes two parameters: username and email. It calls the super() method with the username parameter to invoke the constructor of the superclass (User) and sets the email property.
Since the Teacher class inherits the logMe() method from User, instances of Teacher can also use this method to log their username.
When you create an instance of Teacher (e.g., iPhone), you can call both the inherited method logMe() and the static method createId().
*/