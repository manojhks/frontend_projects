function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let c = 0
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                c++
                break;
            }
        }
        if (c==0) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

let arr = [1, 2, 3, 4, 2, 3, 5];
console.log(removeDuplicates(arr));

