let arr=[1,2,3,4,5,1]
let c=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            c++
            break;
        }
    }
}
if(c>0){
    console.log(true)
}
else{
    console.log(false)
}
