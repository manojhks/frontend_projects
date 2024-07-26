function add(arr){
    let arr2=arr.flat()
    let sum=0
    for(let i=0;i<arr2.length;i++){
        sum+=arr2[i]
    }
    return sum
}

function string(arr){
    let arr2=arr.flat()
    let s=arr2.toString()
    return `\"[${s}]\"`
}
let  nums = [[1,2],[3,4]]
console.log(add(nums))
console.log(string(nums))