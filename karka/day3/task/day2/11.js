let arr=[5, 10, 20, 2, 0, 33, 100, 90]
let arr2=[]
for(let i=0; i<arr.length;i+=2){
    arr2.push(arr[i])
    if(i+1<arr.length){
        arr2.push(arr[i+1])
        arr2.push(arr[i]+arr[i+1])
    }
}
console.log(arr2);