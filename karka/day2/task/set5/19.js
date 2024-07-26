let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,-11,-10,-9,-8,-7,-6,-5]
let positive=[]
let negative=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]>=0){
        positive.push(arr[i])
    }
    else{
        negative.push(arr[i])
    }
}
console.log(positive)
console.log(negative)