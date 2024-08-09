const name=(obj)=>{
    const { name, age, city } = obj;
    console.log(`'${name}'`)
    console.log(`'${age}'`)
    console.log(`'${city}'`)
}
const obj={ name: 'Alice', age: 25, city: 'New York' }
name(obj)