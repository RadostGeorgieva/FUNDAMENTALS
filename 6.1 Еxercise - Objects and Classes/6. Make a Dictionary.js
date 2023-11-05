function solve(array) {
    class Word {
        constructor(term, definition){
            this.term = term;
            this.definition = definition;

        }
    }
    let entries = [];
    for(let i =0; i < array.length; i++) {
        let obj = JSON.parse(array[i]);
        
let foundItem = entries.find(el => el.term === Object.keys(obj)[0]);
    if (foundItem) {
        foundItem.definition = Object.values(obj)[0];
    } else {
        entries.push(new Word(Object.keys(obj)[0], Object.values(obj)[0])) ;
    }

    }
    entries.sort((a, b) => a.term.localeCompare(b.term));
    for(let el of entries) {
        console.log(`Term: ${el.term} => Definition: ${el.definition}`);
    }
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Boiler":"A fucking stupid thing."}'
    ]
    )