let arr=[5,2,-7,3,-2,-1]
let arr1=[]
let c=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        arr1[c]=arr[i]
        c++
    }
}
console.log(arr1)