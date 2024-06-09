class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
      super(username)
      this.email = email
      this.password = password  
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")
const MasalaChai = new User("MasalaChai")
chai.addCourse()
chai.logMe()
MasalaChai.logMe()

console.log(chai === MasalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
// console.log(chai instanceof MasalaChai);  //Not Callable