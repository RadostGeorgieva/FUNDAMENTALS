function orders(item, quantity) {
    let totalPrice = 0;
    if (item == "coffee") {
         totalPrice = quantity * 1.50;
    } else if (item == "water") {
        totalPrice = quantity * 1.00;
    } else if (item == "coke") {
        totalPrice = quantity * 1.40;
    } else if (item == "snacks") {
        totalPrice = quantity * 2.00;
    }
    console.log(totalPrice.toFixed(2));
}
orders("water", 5);