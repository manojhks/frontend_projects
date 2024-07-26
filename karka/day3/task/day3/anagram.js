function anagram(str1,str2){
    str1 = str1.replace(" ",'').toLowerCase();
    str2 = str2.replace(" ",'').toLowerCase();
    let sorted1=str1.split('').sort().join('');
    let sorted2=str2.split('').sort().join('');
if(sorted1===sorted2){
    return "Anagram"
}
else{
    return "Not Anagram"
}
}
let str1="the eyes"
let str2="they see"
console.log(anagram(str1,str2))