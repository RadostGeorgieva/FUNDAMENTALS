function solve(str) {
    let finalStr = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i]!=str[i+1]){
            finalStr+=str[i];
        }
    }
    console.log(finalStr);
}
solve('qqqwerqwecccwd')