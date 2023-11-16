function solve(words, str) {
    let arrOfWords = words.split(", ");
    for (word of arrOfWords) {
        let find = ("*").repeat(word.length);
        str = str.replace(find,word);
    }
    console.log(str);

}
solve('great',

'softuni is ***** place for learning new programming languages')
solve('great, learning',

'softuni is ***** place for ******** new programming languages')