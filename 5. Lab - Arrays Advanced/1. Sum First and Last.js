function sumFirstAndLast(array) {
    console.log(Number(array.pop()) + Number(array.shift()));
}
sumFirstAndLast(['20', '30', '40'])