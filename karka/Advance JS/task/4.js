const set=(input)=>{
    const unique=new Set(input);
    return [...unique]
}
const input=[1,2,2,3,4,4,5]
console.log(set(input))