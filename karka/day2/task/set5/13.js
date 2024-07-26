function occ(x,y){
    let ce=0;
    let co=0;
    for(let i = x; i <= y;i++){
        if(i%2==0){ce++}
        else{co++}
    }
    return "EvenOcc "+ ce + " OddOcc "+ co;
}
console.log(occ(10,55));