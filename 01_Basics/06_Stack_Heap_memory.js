//Stack is used in Primitive data type => Copy of value is recieved

let myname="Yogesh"
let anothername = myname
myname = "Yoshi"

console.log(myname);
console.log(anothername);

//Heap is used in Non Primitive data type => Reference is recieved
let obj1={
    email:"yogeshwargupta2002@gmail.com",
    age: 22
}
let obj2 = obj1;

obj2.email = "sagarayushi35@gmail"
console.log(obj1.email);
console.log(obj2.email);