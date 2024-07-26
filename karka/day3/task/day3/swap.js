function swap(a,b){
    a=a*b; //a=6
    b=a/b; //b=2
    a=a/b; //a=3

    return `${a},${b}`;
}
console.log(swap(2,3));