const longest = (arr) => {
    return arr.reduce((long, current) => {
        return current.length > long.length ? current : long;
    }, arr[0]);
}
const fruits=['apple', 'banana', 'cherry', 'date']
console.log(longest(fruits))