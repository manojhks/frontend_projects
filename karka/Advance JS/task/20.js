const product=([...args])=>{
    return args.reduce((i,c)=>{return i*c;},1)
}
console.log(product(arr))
const arr=[20,3]