function intersection(a,b){
    let c=[];
    let d=0;
    let p=0;
     let q=[];
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]===b[j]){
                c[d]=a[i]
                d++
            }
        }
    }
    for(let k=0;k<d;k++){
        for(let l=1;l<k+1;l++){
            q[p]=c[k]
            if(c[k]!=c[l]){
                q[p]=c[k]
                p++
            }
        }
    }
    return console.log(q)

}
let a=[1,2,2,1]
let b=[2,2]
intersection(a,b)