function positiveOrNegative(n){
    if (n < 0) {
        return "negative";
    }
    else if (n >= 0) {
        return "positive";
    }
}
console.log(positiveOrNegative(11))
console.log(positiveOrNegative(-11))
