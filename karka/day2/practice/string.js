let a="Manojh"
console.log(a.length)

console.log(a.toUpperCase())

console.log(a.toLowerCase())


let b="           Manojh           "

console.log(b)
console.log(b.length)

let c=b.trim()

console.log(c)
console.log(c.length)

let d=b.trimStart()

console.log(d)
console.log(d.length)

let e=b.trimEnd()

console.log(e)
console.log(e.length)

let t1="Karka"
let t2="Academy"
let t3="software"
let t=t1.concat(" ",t3," ",t2)
console.log(t)


let str="String Methods Methods"

let s=str.slice(0,6)
console.log(s)

let u=str.slice(-7)
console.log(u)

let ps=str.padStart(str.length+4,"0")
console.log(ps)

let pe=str.padEnd(str.length+4,"0")
console.log(pe)

let r=str.replace("Methods","Function")
console.log(r)

let ra=str.replaceAll("Methods","Function")
console.log(ra)

let re=str.repeat(3)
console.log(re)

let ca=str.charAt(11)
console.log(ca)