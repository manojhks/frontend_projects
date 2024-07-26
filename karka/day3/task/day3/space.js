function space(str){
    let str2=str.split('')
    for(let i=0; i<str.length;i++){
        if(str2[i]==" "){
            str2[i]='';
        }
    }
    return str2.join('');
}
let str="kjkdj jfdjfl djncsjn"
console.log(space(str));