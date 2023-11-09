function solve(array) {
    let map = new Map();
    for(let el of array) {
        let [item, quantity] = el.split(" ");
        quantity =Number(quantity);
        if(map.has(item)){
           let newQuantity = map.get(item)+quantity;
           map.set(item,newQuantity)
        }else{
            map.set(item,quantity);
        }
    }
    for(let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    };
}
solve(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])