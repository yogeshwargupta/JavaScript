//Singleton Object =>when object is created using constructor
//object.create


//Object literals

const mySym = Symbol("key1")

const user={
    name: "Yoshi",   //key: value   //here key is taken as string in JS
    "full name": "Yoshi Sagar",
    //mySym: "myKey1",  //here mySym is treated as string not symbol to treat is like a symbol check following
    [mySym]: "myKey1",
    age: 18,
    location: "Gorakhpur",
    email: "yoshi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//How Js is excessed
console.log(user.email);
//console.log(user[email]); //wrong way because key is treated as string in Js
console.log(user['email']); 
console.log(user["full name"]); 
console.log(user.mySym);   //it will give undefined
console.log(user[mySym]);   //correct way

user.email = "yoshi@chatgpt.com" //value can be override using "="
//Object.freeze(user)   //all the key values present in user object are now locked i.e. cannot be changed 
console.log(user);

user.greeting= function(){
    console.log("Hello Yoshi");
}
user.greeting2= function(){
    console.log(`Hello user, ${this.name}`);
}
console.log(user.greeting);//function will not execute only its reference is returned
console.log(user.greeting());
console.log(user.greeting2());