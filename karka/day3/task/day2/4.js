function rr(a,b)
{
    let c=0;
    for(let i=0;i<a.length;i++){
        if(a[i]!=b){
            a[c]=a[i];
            c++;
        }
    }
    let d=a.length;
    a.length=c;
    for(let j=c;j<d;j++){
        a[j]="_";
    }
    return console.log(`[${a.toString()}]`);
}
let a=[3,2,2,3]
let b=3
rr(a,b)

