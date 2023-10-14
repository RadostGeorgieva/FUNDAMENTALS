function kElements(array) {
    let first = array.slice(1,array[0]+1);
    let second = array.slice(-array[0]);
    console.log(first.join(" "));
    console.log(second.join(" "));
}

kElements([3, 6, 7, 8, 9])
kElements([2,

    7, 8, 9])