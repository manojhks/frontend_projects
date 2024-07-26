let n = 31234;
let c = 0;

while (n > 0) {
    n = Math.floor(n / 10);
    c++;
}
console.log(c);
