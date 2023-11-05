function solve(array) {
    class Letter{
        constructor(letter) {
            this.letter = letter;
            this.catalogue = [];
        }
        sortValues() {
            this.catalogue.sort((a, b) => a.word.localeCompare(b.word));
        }
        add(current){
            this.catalogue.push(current);
            this.sortValues();
        }
      
    }
    let arrayOfLetters = [];
    let arrayOfObjects = [];
    for(let i = 0; i < array.length; i++) {
        let letter = array[i][0];
        if(arrayOfLetters.includes(letter)== false) {
            let l = new Letter(letter);
            arrayOfLetters.push(letter);
            arrayOfObjects.push(l);
        }
            let item = array[i].split(" : ");
            let word = {word:item[0],cost:item[1]};
            arrayOfObjects[arrayOfLetters.indexOf(letter)].add(word);
        }
        arrayOfObjects.sort((a, b) => a.letter.localeCompare(b.letter))
        for(let el of arrayOfObjects) {
            console.log(el.letter);
            for(let w of el.catalogue) {
                console.log(`${w.word}: ${w.cost}`);
            }

        }
      
    }
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )