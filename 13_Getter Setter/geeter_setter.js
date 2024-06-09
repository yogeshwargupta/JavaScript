class User {
    constructor(email,password){
        this.email=email,
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
          return `${this._password}Ram`
    }
    set password(value){
          this._password = value.toUpperCase()
    }
}

const yogesh = new User('yoesh@gmail.com',"14032jdvf002")
console.log(yogesh.password);
console.log(yogesh.email);