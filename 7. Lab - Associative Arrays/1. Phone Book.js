function solve(array) {
    let assocArr = [];
    for(let el of array) {
        let [key, value] = el.split(" ");
        assocArr[key] = value;
    }
    for(let el in assocArr){
        console.log(`${el} -> ${assocArr[el]}`);
    }
}
solve(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])