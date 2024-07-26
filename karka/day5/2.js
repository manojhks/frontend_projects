let arr = []
let c = 0
let i = 2024
while (c < 20) {
    if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
        arr[c] = i
        c++
    }
    i++
}
console.log(arr)