function smallest(array) {
    array.sort(function(a,b){return a-b;})
    console.log(`${array[0]} ${array[1]}`);
}
smallest([30, 15, 50, 5])