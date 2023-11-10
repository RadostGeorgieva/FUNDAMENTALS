function solve(array) {
    let addressBook = {};
    
    for(let el of array) {
        let [name, address] = el.split(":");
        addressBook[name] = address;
    }

    Object.entries(addressBook).sort((a,b) => a[0].localeCompare(b[0]));
    for(let [name,address] of Object.entries(addressBook)){
        console.log(`${name} -> ${address}`);
    }
}
solve(['Bob:Huxley Rd','John:Milwaukee Crossing','Peter:Fordem Ave','Bob:Redwing Ave','George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])