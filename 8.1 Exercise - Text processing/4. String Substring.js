function solve(word, text) {
    text = text.toLowerCase().split(" ");
    let wordLower = word.toLowerCase()
    for(curr of text){
    if(curr == wordLower){
        console.log(word);
        return;
    }
}
console.log(`${word} not found!`);  
}
solve('omg',

'JavaScript is the best programming language')

