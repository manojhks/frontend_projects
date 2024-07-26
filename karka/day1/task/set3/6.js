function factorial(n){
    if (n === 0 || n === 1){
        return 1;
        }
    let r=1;
    while (n > 1) {
        r *= n;
        n--;
    }
    return r;
}
let f=factorial(5);
console.log(f);