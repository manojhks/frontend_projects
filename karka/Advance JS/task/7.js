const numbers = [1, 2, 3, 2, 4, 2, 5];
const element=2
const occurance=(numbers,element)=>{
    const first=numbers.indexOf(element);
    const last=numbers.lastIndexOf(element);
    return {firstIndex:first,
        lastIndex:last
}
}
console.log(occurance(numbers,element))