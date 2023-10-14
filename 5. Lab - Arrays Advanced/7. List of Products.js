function listOfProducts(array) {
    array.sort();
    print(array)
    function print(array) {
        for(let i =1; i<=array.length; i++) {
            console.log(`${i}.${array[i-1]}`);
        }
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions',

'Apples'])