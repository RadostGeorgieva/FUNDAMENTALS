function solve(str) {
    function isOnlyLetters(word) {
        return /^[A-Za-z]*$/.test(word);
    }
    let array = str.split(" ");
for(let word of array) {
    if(word.startsWith('#') && word.length>1){
        let toPrint = word.substring(1);
        if(isOnlyLetters(toPrint)){
            console.log(toPrint);
        }
    }
}
}
solve('Nowadays everyone uses # to tag a #spec1al word in #socialMedia')