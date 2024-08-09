let arr=[1,2,3,4,5,6,8,10,11,222]
let even = arr.find((data,index)=>
{
    return data%2==0
})
console.log(even)