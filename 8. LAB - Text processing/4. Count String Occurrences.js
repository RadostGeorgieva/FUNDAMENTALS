function solve(array, word) {
let count =0;
let string = array.split(" ");
for(str of string){
    if(str == word) {
    count++;
    }
}
console.log(count)
}
solve('This is a word and it also is a sentence',

'is')