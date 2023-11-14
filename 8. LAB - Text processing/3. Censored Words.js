function solve(array, word) {
    let replaceWith = ("*").repeat(word.length);
    while(array.includes(word)){
        array =array.replace(word, replaceWith);
    }
    console.log(array);

}
solve('A small sentence with some words','small');