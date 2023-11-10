function solve(array) {
    let found = [];
    for(let el of array) {
        let [action, number] = el.split(", ");
        if(action == "IN" && (!found.includes(number))){
            found.push(number);
        } else if((action == "OUT" && (found.includes(number)))) {
            found.splice(found.indexOf(number),1);
        }
    }
    found.sort((a,b) => a.localeCompare(b));
    if (found.length == 0) {
        console.log(`Parking Lot is Empty`);
    } else{
    for(let el of found) {
        console.log(el);
    }
}
}
solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])