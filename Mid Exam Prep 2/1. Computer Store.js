function store(array) {
    let customer = array.pop();
    let prices = array.map(Number);
    let priceWithoutTax = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i]<0) {
            console.log("Invalid price!");
        } else {
            priceWithoutTax+= prices[i];
        } 
    }
    let tax = priceWithoutTax * 0.2;
    let totalWithTax = priceWithoutTax + tax;
    if(customer == "special") {
        totalWithTax -= (totalWithTax*0.1);
    }
    if(totalWithTax == 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalWithTax.toFixed(2)}$`);
    }
}
store(['1050','200','450','2','18.50','16.86','special'])
