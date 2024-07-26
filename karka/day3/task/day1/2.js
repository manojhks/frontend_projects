let arr=[5,10,15,20,22,23]
for(let i=0;i<arr.length;i++){
    if(arr[i] %2==1){
        arr[i]=0;
    }
}
console.log(arr)