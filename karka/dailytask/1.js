let arr=[10,20,30,40,10];
for (let i = 0;i<arr.length;i++)
{
    if (arr[0] == arr[arr.length-1]){
        console.log("True");
        break
    }
    else{
        console.log("False");
        break
    }
}