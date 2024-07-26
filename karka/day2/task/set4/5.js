function leapYear(n){
    if(n%4==0 && n%100!=0){
        return "leap";
    }
    else if(n%400==0){
        return "leap";
    }
    else{
        return "Not a leap";
    }
}
console.log(leapYear(1700));
console.log(leapYear(1600));
console.log(leapYear(2000));
console.log(leapYear(2024));