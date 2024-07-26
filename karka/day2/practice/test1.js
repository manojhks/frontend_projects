let a=[1,0,2,3,0,4,5,0]
let b=a.length
let c=[]
for(let i=0;i<b;i++){
    c.push(a[i])
    if(a[i]==0){
        c.push(0)
    }
}
c.length=b
console.log(c)