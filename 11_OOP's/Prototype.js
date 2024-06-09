// let myName = "Yoshi      "
// let myhobby = "Singing     "
// console.log(myName.trueLength);

let myHeros = ["Ram", "Krishna", "Shiva"]

let heroPower = {
    Ram: "Bow-Arrow",
    Krishna: "Sudarshan Chakra",
    Shiva: "Trishool",

    getRamPower: function(){
        console.log(`Ram's power is ${this.Ram}`);
    } 
}
Object.prototype.yogesh = function(){  // This line extends the prototype of all objects with a method named yogesh. This means that all objects in JavaScript, including arrays and functions, will inherit this method. When called, it logs a message indicating that "Yogesh is present in all objects".
    console.log('Yogesh is present in all objects');
}


Array.prototype.heyYoshi = function(){  //This line extends the prototype of all arrays with a method named heyYoshi. This means that all array instances will inherit this method. When called, it logs the message "Yoshi says Hello".
    console.log(`Yoshi says Hello`);
}
// heroPower.yogesh()
myHeros.yogesh()      //This line attempts to call the yogesh method on the myHeros array. Since arrays inherit from Array.prototype, they also inherit the yogesh method from Object.prototype. However, since arrays are not objects, this line will result in an error.
myHeros.heyYoshi()    //This line calls the heyYoshi method on the myHeros array. Since arrays inherit from Array.prototype, they also inherit the heyYoshi method. This will log the message "Yoshi says Hello" to the console.
// heroPower.heyYoshi()   //heroPower don't have accesss to heyYoshi

//Inheritance

const user={
    name: "Chai",
    email: "ramram@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport       // It inherits properties from TeachingSupport using __proto__.
}

Teacher.__proto__ = user    //establishing a prototype chain where Teacher inherits properties from user.

//modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)   //Prototypal Inheritance     //Sets the prototype of TeachingSupport to Teacher, establishing a prototype chain where TeachingSupport inherits properties from Teacher.

let anotherUsername = "AyushiKiAmma        "

String.prototype.trueLength = function(){
    console.log(`${this}`);                     //Adds a method trueLength to the prototype of String, allowing all string instances to access this method. This method logs the trimmed length of the string.
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Rammmmm   ".trueLength()
"Ram".trueLength()