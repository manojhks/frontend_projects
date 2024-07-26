let arr=[1,0,2,3,0,4,5,0]
let len=arr.length
let arr2=[]
for(let i=0;i<len;i++){
    arr2.push(arr[i])
    if(arr[i] === 0){
        arr2.push(0)
    }
}
arr2.length=len
console.log(arr2)