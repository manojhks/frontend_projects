function greater(a,b){
    if(a==b){
        return "Equal";
    }
    else if(a>b){
        return a;
    }
    else {
        return b;
    }
}
console.log(greater(1,2));
console.log(greater(1,1));
console.log(greater(5,3));