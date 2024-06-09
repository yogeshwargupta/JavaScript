// var c =300
let a =1000      //Global Scope

if(true){
    let a = 10
    const b = 20
    var c = 30            //Block Scope
    //console.log("Inner: ", a);
}


// Note: values fron Global scope can go to local scope but values from local space should never go to global scope
//var has a disadvamtage of breaking the upper rule

//console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Yoshi"

    function two(){
        const website ="Youtube"
        console.log(username);
    }
   // console.log(website);  //--->out of its block scope
    two()
}
one()

if(true){
    const username = "Yoshi"
    if(true){
        const website = " Youtube"
        console.log(username + website);
    }
    //console.log(website)
}
//console.log(username);

//*******************************************Interesting***********************************
console.log(addone(5));   //Excessible
function addone(num){
    return num+1;
}

//console.log(addtwo(5));  //Not Excessible
const addtwo = function(num){
    return num+2;
}