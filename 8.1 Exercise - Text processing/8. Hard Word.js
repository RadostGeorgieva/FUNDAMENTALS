function solve(array) {
    let letter = array.shift().split(" ");
    let arrOfWords = array.shift();
    for (word of arrOfWords) {
        let find = ("_").repeat(word.length);
        for (wordOfLetter of letter) {
            let current = wordOfLetter;
            let end = "";
            let finalStr = "";
            if (current.includes("_")) {

                for (let i = 0; i < current.length; i++) {
                    if (current[i] == ("_")) {
                        finalStr += current[i];
                    }
                }
                if (finalStr == find) {
                    end = current.replace(finalStr, word)
                    letter.splice(letter.indexOf(wordOfLetter), 1, end);

                }

            }

        }

    }
    console.log(letter.join(" "));
}

solve(['1____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',

    ['glad', 'pie', 'bring', 'During', 'amazing', 'pharmacist', 'sprained']])