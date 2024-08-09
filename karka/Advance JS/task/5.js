const arr=['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']
const words=arr.filter((data,index)=>{
    return data.length>5
})
console.log(words)