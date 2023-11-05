function solve(arr1, arr2) {
    let all = [];
    class Product {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = quantity;
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 == 0) {
            let product = new Product;
            product.name = arr1[i];
            product.quantity = Number(arr1[i + 1]);
            all.push(product);
        } else {
            continue;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (i % 2 == 0) {
            if (arr1.indexOf(arr2[i]) == -1) {
                let product = new Product;
                product.name = arr2[i];
                product.quantity = Number(arr2[i + 1])
                all.push(product);
            }
            else {
                for (let obj of all) {
                    if (obj.name == arr2[i]) {
                        obj.quantity += Number(arr2[i + 1]);
                    }
                }
            }
        } else {
            continue;
        }
    }
    for (let obj of all) {
       console.log(`${obj.name} -> ${obj.quantity}`);
    }
}

solve([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])