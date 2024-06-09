/*
function Myname(){
    console.log("Y");
    console.log("O");
    console.log("G");
    console.log("E");
    console.log("S");
    console.log("H");
}
//Myname   ---->Function reference
//Myname()   //--->Function execution

function addTwoNumbers(number1, number2){  //parameter
    console.log(number1+number2);
}

const result=addTwoNumbers(3,7)   //--->10   //Argument
// addTwoNumbers(3,"7")  //---->37
// addTwoNumbers(3,"d")   //--->3d
// addTwoNumbers(3,null)  //--->3

console.log(result);  //Undefined because function is not returning any value */


function addTwoNumbers(number1, number2){  //parameter
    // let result = number1+number2
    // return result  //after returning no other task is performed in function

    return number1+number2
}
const ans=addTwoNumbers(3,7)
//console.log(ans);

function loginUserMessage(username){  //if (username=="Ram") then if no any argument will be passed then by default "Ram" will be taken as username and if statement will have no use
    if(!username){        //username===undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Yogesh"))
//console.log(loginUserMessage())  //---> Undefined

function calculateCartPrice(...num1){   //rest operator also used as spread operator at some place
    return num1
}

console.log(calculateCartPrice(132, 232 ,433, 232));


//How object is passed and used in Functions
const user={
    username: "Yogesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username id ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);


handleObject({
    username: "Yogesh",
    price: 199
});


//How array is created and passed in Function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));