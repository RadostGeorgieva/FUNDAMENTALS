function solve(array) {
    let words = array.shift().split(" ");
    let wordCounter = {};
    for (let el of words) {
        wordCounter[el] =0;
    }
    for (let el of array) {
        if (words.includes(el)) {
                wordCounter[el]++;
        }
        
    }
    let sorted = Object.entries(wordCounter).sort((a,b)=> (b[1]-a[1]))
    for(let [word,quantity] of sorted) {
        console.log(`${word} - ${quantity}`);
    }
}
