function solve(array){

let totalPrice = 0;
console.log(`Bought furniture:`);
for(let el of array){
    let regEx = />>(?<furniture>[A-Z]\w+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g;
    match = regEx.exec(el);
    if(match!=null){
    let name = match.groups.furniture;
    let q = match.groups.quantity;
    let p = match.groups.price;
    totalPrice+=q*p;
    console.log((name));
    }
}
console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
solve(['>>Laptop<<312.2323!3',

'>>TV<<300.21314!5',

'>Invalid<<!5',

'>>TV<<300.21314!20',

'>>Invalid<!5',

'>>TV<<30.21314!5',

'>>Invalid<<!!5',

'Purchase'])
