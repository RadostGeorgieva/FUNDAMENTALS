function solve(array) {
    let total = 0;
for(el of array) {

    if (el == "end of shift") {
        console.log(`Total income: ${total.toFixed(2)}`);
        break;
    } else {
        let regex = /(%([A-Z][a-z]+)%).*(<(\w+)>).*(\|(\d+)\|)[^0-9]*((\d+(\.\d+)?)\$)/g;
       let match = regex.exec(el);
       if(match!=null) {
        let product = Number(match[8]) * Number(match[6]);
        console.log(`${match[2]}: ${match[4]} - ${product.toFixed(2)}`);
        total+=product;
       }


    }
}
}

solve(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])