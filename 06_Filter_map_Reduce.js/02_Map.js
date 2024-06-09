//Map

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.map((num)=> num+10)


//Chaining
const newNums = myNum
                .map((num)=>num*10)
                .map((num)=>num+1)   //in chaining value is paased from one chain to another and then finally to the variable
                .filter((num)=>num>40)
console.log(newNums);

