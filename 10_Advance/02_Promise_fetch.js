const promiseOne = new Promise(function(resolve,reject){
   //Do an async task
   //DB calls, cryptography, network 
   setTimeout(function(){
    console.log('Async task is complete');
    resolve()
   },1000)
})

promiseOne.then(function(){           // The then() method is used to handle the resolved state of the promise.
    console.log('Promise Consumed');  // It takes a callback function as an argument, which will be executed when the promise is resolved.
})


//Method-2
//Below is another example of creating and consuming a promise, similar to the first one, but without assigning the promise to a variable.
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})


//Following block of code creates a promise promiseThree that resolves with an object containing a username and an email after 1 second.
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
           resolve({username: 'Yoshi', email: 'yogeshwargupta2002@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
  console.log(user);
})



//Following block of code creates a promise promiseFour that can either resolve with a user object or 
//reject with an error message after 1 second, depending on the value of the error variable
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Yoshi", password: "14032002"})
        }else{
           reject('ERROR: Kuchh to Gadbad hai re baba') 
        }
    },1000)
})


/*- The first then() method handles the resolved state of the promise. It logs the user object to the console and returns the username.
- The second then() method handles the resolved value returned by the first then() method (username). It logs the username to the console.
- The catch() method handles any errors that occur during promise execution. It logs the error message to the console.
- The finally() method executes regardless of the promise's state, whether resolved or rejected. It logs a message indicating that 
the promise is either resolved or rejected.*/

promiseFour.then(function(user){
      console.log(user);
      return user.username
}).then((username)=>{
     console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Yogesh", password: "14032002"})
        }else{
           reject('ERROR: JS went wrong') 
        }
    },1000) 
})


//This block of code defines an asynchronous function consumePromiseFive() that consumes the promise promiseFive using await.
//Inside the function, it uses a try...catch block to handle any errors that occur during promise execution.
async function consumePromiseFive(){    //async await cann't directly handle-->they use try and catch
    try {
        const response = await promiseFive 
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



//This block of code defines an asynchronous function getAllUsers() that fetches data from a remote server using fetch.
//Inside the function, it uses a try...catch block to handle any errors that occur during the fetch operation.
//It awaits the response and then parses it as JSON before logging the data to the console.
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = await response.json()
        console.log(data); 
    } catch (error) {
        console.log('E: ',error);
    }
}
getAllUsers()


//Above implemnetation using .then() .catch()


// This block of code achieves the same functionality as getAllUsers() but without using async/await.
// It uses the fetch API to make an HTTP request to a remote server and handles the response using then() and catch() methods.
// The response is parsed as JSON and logged to the console.
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
     return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))