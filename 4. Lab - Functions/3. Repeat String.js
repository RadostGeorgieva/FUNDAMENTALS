
function repeatString(str, repetitions) {
    let repeatedStr = "";
    for(let i =0; i <repetitions; i++) {
        repeatedStr+=str;
    }
    return repeatedStr;
}
repeatString("abc", 3);