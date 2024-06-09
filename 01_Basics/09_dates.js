//Dates => It is an object in  javaScript

let myDates = new Date()
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());

let myCreateDate = new Date(2023, 1, 23)
// console.log(myCreateDate.toLocaleString());

let myTimeStamp=Date.now()
 console.log(myTimeStamp);
 console.log(myCreateDate.getTime());
console.log(Math.round(Date.now()/1000));

let newDate=new Date()

// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());

newDate.toLocaleDateString('default', {
    weekday: "long"
})
console.log(newDate.toDateString());
console.log(newDate.getDay());

