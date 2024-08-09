let arr=[1,2,3,4,5]
let sum = arr.reduce((i,c)=>
{
    return i*c;
},1)
console.log(sum)