function sorting(array) {
    let newArray = [];
    for (let i = 0; i < array.length / 2; i++) {
        array.sort((a, b) => b - a);
        newArray.push(array[i]);
        array.sort((a, b) => a - b);
        newArray.push(array[i]);

    }
    if (array.length % 2 != 0) {
        newArray.pop();
    }
    console.log(newArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32,

    7, 19, 47, 100])