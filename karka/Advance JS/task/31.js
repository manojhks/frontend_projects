const arr=[-5, -3, 0, 9, 2]
const positive=(arr)=>{
    return arr.find(element=>element>0)
}
console.log(positive(arr))