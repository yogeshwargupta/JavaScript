const user ={
    username: "Yogesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Yoshi"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Yogesh"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//         let username = "Yogesh"
//         console.log(this.username);
// }
// chai()

const chai = () => {
        let username = "Yogesh"
        console.log(this.username);
}
//chai()



//Arrow Function
// const add = (num1,num2) => {
//     return num1+num2        //if parenthesis is used then you have to write return statement
// }                            //Explicit return 

//const add = (num1,num2) => num1+num2      //No parenthesis no return
const add = (num1,num2) => (num1+num2 )     //Implicit return  

//Note: parenthesis is important to return object
console.log(add(4,23))

// const myArray = [2,5,3,6,2]
// myArray.forEach(() => {})