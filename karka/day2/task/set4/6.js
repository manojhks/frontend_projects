function grade(n){
        if (n>90){
            return "A";
        }
        else if (n>80) {
            return "B";
        }
        else if (n>70) {
            return "C";
        }
        else if (n>60) {
            return "D";
        }
        else {
            return "F";
        }
    };
console.log(grade(93));
console.log(grade(83));
console.log(grade(73));
console.log(grade(63));
console.log(grade(53));