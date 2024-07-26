function factorial(n){
    if (n === 0 || n === 1){
        return 1;
    }
    let r=1;
    for (let i = n;i>1;i--) {
      r *= i;
    }
    return r;
}
let f=factorial(5);
console.log(f);