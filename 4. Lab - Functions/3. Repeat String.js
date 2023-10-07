function solve(str, repetitions) {
function repeatString(str, repetitions) {
    let repeatedStr = "";
    for(let i =0; i <repetitions; i++) {
        repeatedStr+=str;
    }
    return repeatedStr;
}
console.log(repeatString(str, repetitions));
}
solve("abc", 3);