const marvel_heros = ["thor","Ironman","Hulk"]
const dc_heros = ["superman","Batman","Flash"]

//marvel_heros.push(dc_heros)  //All elemnts of dc_heros will be passed as sinle element in marvel_heros
// console.log(marvel_heros);
// console.log(marvel_heros.length);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros) //return new array
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread all element and stores each element in new array
//console.log(all_new_heros);
const a=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_a = a.flat(Infinity)
//console.log(real_a);


//isArray(), from(), of()
console.log(Array.isArray("Yoshi")); //check weather "Yoshi" is array or not 
console.log(Array.from("Yoshi")); //Create an Array from "Yoshi"
console.log(Array.from({name: "Yoshi"}));//Will not be able to convert it into Array and will return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));