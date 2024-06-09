const User = {
    _email: 'y@yg.com',
    _password: 'absd',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
         this.email = value
    }
}

const tea = Object.create(User)
console.log(tea.email );