let arr = [1,2,34,0,66,78,0,56];
let sum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        sum+=arr[i];
    }
    else{
        break;
    }
}
console.log(sum);