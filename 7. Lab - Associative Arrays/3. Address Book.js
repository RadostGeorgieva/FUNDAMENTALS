function solve(array) {
    let addressBook = {};
    
    for(let el of array) {
        let [name, address] = el.split(":");
        addressBook[name] = address;
    }
    let sorted = Object.entries(addressBook);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));
    for(let name in Object.entries(sorted)){
        console.log(`${sorted[name][0]} -> ${sorted[name][1]}`);
    }
}
solve(['Bob:Huxley Rd','John:Milwaukee Crossing','Peter:Fordem Ave','Bob:Redwing Ave','George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])