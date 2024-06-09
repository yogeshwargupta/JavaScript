//Reduce

const myNums=[1,2,3,4]
// const Total=myNums.reduce(function(acc,curr){
//     console.log(`acc: ${acc} ans Curr: ${curr}`);
//     return acc + curr;
// }, 0)

const Total=myNums.reduce((acc,curr)=>acc+curr,0)

//console.log(Total);

const shopingCart = [
    {
        itemName: "JS Course",
        price: 499
    },
    {
        itemName: "Python Course",
        price: 499
    },
    {
        itemName: "BlockChain Course",
        price: 499
    },
    {
        itemName: "Cloud Course",
        price: 499
    },
    {
        itemName: "DSA Course",
        price: 499
    }
]

const netCharge = shopingCart.reduce((acc, item)=>acc+item.price,0)
console.log(netCharge);