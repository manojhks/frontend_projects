const sum=(...args)=>{
    return args.reduce((i,c)=>{return i+c;},0)
}
console.log(sum(10,20,30))