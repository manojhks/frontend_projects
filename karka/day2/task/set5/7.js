// Square

function square(n){
    for(let i = 0; i < n;i++) {
        let row='';
        for(let j = 0;j<n;j++){
            row+="*  ";
        }
        console.log(row);
    }
}
square(5);

// RightTriangle
function righttriangle(n){
    for(let i = 0; i <= n;i++) {
        let row='';
        for(let j = 0;j<i;j++){
            row+="*  ";
        }
        console.log(row);
    }
}
righttriangle(5);
