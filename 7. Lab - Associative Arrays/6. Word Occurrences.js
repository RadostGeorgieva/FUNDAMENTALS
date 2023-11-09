function solve(array) {
    let map = new Map();
    for (let item of array) {
        if (map.has(item)) {
            let currValue = map.get(item);
            map.set(item, currValue+1)
        } else {
            map.set(item, 1);
        }
    }
    let mapEntries = Array.from(map.entries());
    mapEntries.sort((a, b) => b[1]-a[1]);
    for([word, quantyty] of mapEntries)
    console.log(`${word} -> ${quantyty} times`)
}
solve(["dog", "bye", "city", "dog", "dad",

"boys", "ginger"])