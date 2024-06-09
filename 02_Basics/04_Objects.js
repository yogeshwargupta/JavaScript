const tinderUser = new Object()

tinderUser.id =  "123abc"
tinderUser.name= "Yoshi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser={
    email: "yoshisagar@google.com",
    fullname: {
        userFullName: {
            firstName: "Yoshi",
            lastname: "Sagar"
        }
    }
}

//console.log(regularUser.fullname.userFullName.lastname);


//merge object

const obj1 = {1: "A", 2:"Y"}
const obj2 = {3: "A", 4:"Y"}
// const obj3 = {obj1, obj2}  //It will give same problem as array
// const obj3 = Object.assign(obj1, obj2)   //both are correct in this obj1 act as target and obj2 act as source ans all element of obj2 ie source is copied in obj1 ie target
// const obj4 = Object.assign({}, obj1, obj2) //{} act as a target and obj1 and obj2 act as a target and all the values of obj1 and obj2 is copied in {} ie target

const obj3 = {...obj1, ...obj2}//spread all element of object and push it into {} and return it on obj3
// console.log(obj3);

const users=[
    {
        id: "1",
        email: "yoshi@gmail.com"
    },
    {
        id: "1",
        email: "yoshi@gmail.com"
    },
    {
        id: "1",
        email: "yoshi@gmail.com"
    },
    {
        id: "1",
        email: "yoshi@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //all keys will be returned in array
console.log(Object.values(tinderUser)); //all values will be returned in array
console.log(Object.entries(tinderUser)); //all key values pairs(in Array) will be returned in array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//check weather isLoggedIn present in object or not