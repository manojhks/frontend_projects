const total=(obj)=>{
    return obj.reduce((i,c)=>{
        return i+c.price
    },0)
}
const cart = [
    { item: 'apple', price: 1.5 },
    { item: 'banana', price: 2.0 },
    { item: 'orange', price: 1.25 }
  ];
  console.log(total(cart));
