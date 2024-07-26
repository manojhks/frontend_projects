let arr=[5,4,3]
for(let i=0;i<arr.length;i++){
    let p=1;
    while(arr[i]>1){
p*=arr[i]
arr[i]--
    }
    console.log(p)
}