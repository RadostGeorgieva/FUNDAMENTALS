function solve(array) {
    let arr = {};
    for(let el of array) {
        let current = el.split(": ");
        let name = current.shift();
        let set = new Set(current[0].split(", "));
        if(arr.hasOwnProperty(name)) {
            set.forEach(item => arr[name].add(item));
        } else{
            arr[name] = set;
        }
    }
    let stack = {};
    let types = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    let powers = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    };
    for([player, cards] of Object.entries(arr)) {
        let stacked = 0;
        for(el of cards) {
            let current =0;
            let power = "";
            let type = "";
            if(el.length == 3){
            power = el[0]+el[1]
            type = el[2];
            }else {
                power = el[0];
                type = el[1];
            }
            
            if(!isNaN(Number(power))){
                current = Number(power) * types[type];
            } else{
                current = powers[power] * types[type];
            }
            stacked+=current;
        }
        console.log(`${player}: ${stacked}`);

    }
}
solve([

    'Peter: 2C, 4H, 9H, AS, QS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])