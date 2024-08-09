const avg=(arr)=>{
    return arr.reduce((i,c)=>{
        return (i+c/arr.length)
    },0)
}
let arr=[10, 20, 30, 40, 50]
console.log(avg(arr))