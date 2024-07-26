function intersect(arr1,arr2){
    let arr3=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]===arr2[j]){
                arr3.push(arr1[i]);
            }
        }
    }
    for(let k=0;k<arr3.length;k++){
        for(let l=1;l<arr3.length;l++)
        {
            if(arr3[k]===arr3[l]){
                arr3.splice(l,1);
            }
        }
    }
    return arr3;
}
let nums1 = [1,2,2,1]
let nums2 = [2,2]
console.log(intersect(nums1,nums2))
