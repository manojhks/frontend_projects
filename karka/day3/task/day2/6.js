function digit(n){
    while(n>=10){
        let a=n%10;
        let b=n-a;
        let c=b/10;
        n=c+a;
    }
    return n;
}
console.log(digit(38));