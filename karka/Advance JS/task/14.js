const exceptionHandling=(a,b)=>{
    try{
        if(b!=0){
        let division=(a/b);
        console.log(division);
    }
    }
    catch(error){
        console.log(error);
    }
}
exceptionHandling(10,10)
exceptionHandling(10,0)
