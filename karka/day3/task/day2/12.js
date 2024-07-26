let nums1=[0,1,0,3,12]
let c=0;
for(let i=0;i<nums1.length;i++){
    if(nums1[i] != 0){
        nums1[c]=nums1[i];
        c++
    }
}
for(let i=c;i<nums1.length;i++){
    nums1[i]=0;
}
console.log(nums1)