function age(n){
    if (n<16){
        return "You can't drive.";
    }
    else if (n==16 || n==17 ) {
        return "You can drive but not vote.";
    }
    else if (n>=18 && n<=24){
        return "You can vote but not rent a car.";
    }
    else if (n>=25) {
        return "You can do pretty much anything.";
    }
};
console.log(age(9));
console.log(age(17));
console.log(age(19));
console.log(age(26));