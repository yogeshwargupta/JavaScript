const name = "Yogesh"
const anothername = new String('Yoshi-gupta') //another way of writing string with key value pair
const age = 22
const gfcount = 36
// console.log(name + " " + age + " 36 Girlfriends");
// console.log(`Hello my name is ${anothername} and my age is ${age} and I have toatl of ${gfcount} girlfriends`);

// console.log(anothername[0]);
// console.log(anothername.length);
// console.log(anothername.toUpperCase());
// console.log(anothername.charAt(2));
// console.log(anothername.indexOf('s'));
// console.log(anothername.__proto__);

const newname=anothername.substring(0,2)
console.log(newname);

const anothernewname=anothername.slice(-5,4)
console.log(anothernewname);

const newString = "       Yogesh"
console.log(newString);
console.log(newString.trim());  //trim at both end
console.log(newString.trimStart());
console.log(newString.trimEnd());


const url = "https://yogesh.com//yogesh%20gupta"

console.log(url.replace('%20', '-'));

console.log(url.includes('Yogesh'));

console.log(anothername.split('-'));