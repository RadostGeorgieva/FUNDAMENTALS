function oddAndEven(array) {
    let originalSum = 0;
    let modifiedSum = 0;
    for (let i = 0; i < array.length; i++) {
        originalSum += array[i];
        if (array[i] % 2 == 0) {
            array[i] = array[i] + i;
        } else {
            array[i] = array[i] - i;
        }
        modifiedSum += array[i];
    }
    console.log(array);
    console.log(originalSum);
    console.log(modifiedSum);
}
 oddAndEven([-5, 11, 3, 0, 2])