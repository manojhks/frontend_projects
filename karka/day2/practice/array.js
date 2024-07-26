let arr=[1,2,3,4,5,6,7,8,9,10,11]

console.log(arr)

arr[5]=33
arr[6]=0
console.log(arr)

console.log(arr.length)

console.log(arr.toString())

arr.push(12,13,14,15,16,17)
console.log(arr)

arr.pop()
console.log(arr)


let cars=["thar","boleno","audi","benz","Bmw","1aaa","11aaa"]

console.log(cars.sort())
console.log(cars.reverse())

cars.unshift("a15","a20")
console.log(cars)

cars.shift()
console.log(cars)


let a=[1,2,3,4,5,13,14,15,8,9,10]

console.log(a.slice(5, 8))

a.splice(5,3,7,8)
console.log(a)

console.log(a.join("-"))

console.log(a.at(3))

let b=[11,12,13,14,15,16]

let con=a.concat(b)
console.log(con)

let arr1=[[1,2,3],[4,5,6],[7,"abc"],a]
let arr2=arr1.flat()
console.log(arr2)