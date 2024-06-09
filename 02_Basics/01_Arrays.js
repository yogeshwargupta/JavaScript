//Array
const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman","nagraj","Ram"]
const myArr2 = new Array(1,2,3,4)
//console.log(myArr[3]);

//Array Methods


// myArr.push(6)
// myArr.pop()
myArr.unshift(9)    //shifts all element from starting toend by one and add given input at starting
myArr.shift()       //remove starting element

// console.log(myArr.includes(3)); // check if given elemnt is present in arr or not
// console.log(myArr.indexOf(5));   // return index of element in arr if element not present gives -1

const newArr=myArr.join()
// console.log(newArr);
// console.log(typeof(newArr));
// console.log(myArr);

// Slice and Splice

console.log("A ", myArr);
const arr = myArr.slice(1,3) //form array from original array with manupulating it
console.log(arr);

console.log("B ", myArr);
const arr2 = myArr.splice(1,3) //form array from original array by manupulating it
console.log(arr2);

console.log("C ", myArr);
