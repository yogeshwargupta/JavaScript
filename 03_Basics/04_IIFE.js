// Immediately Invoked Function Expression (IIFE)
//used when things are polluted by Global variables

// function chai(){
//     console.log(`DB Connected`);
// }
// chai()

//IIFE Syntax
(function chai(){
    //Named IIFE
    console.log(`DB Connected`);
})();

((name) => {     //Arrow Function
    //Unnamed IFFE
    console.log(`db connected ${name}`);
})("Yoshi");