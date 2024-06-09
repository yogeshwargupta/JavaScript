//ES6

class User {
    constructor(usernmae, email, password){
        this.usernmae = usernmae
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.usernmae.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gnail.com", "12334")

console.log(chai.encryptPassword());
console.log(chai.changeUserName());

//BST
/*
function User(usernmae, email, password){
        this.usernmae = usernmae
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
        return `${this.usernmae.toUpperCase()}`
}

//Usecase
const tea = new User("tea", "tea@gnail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUserName());

*/