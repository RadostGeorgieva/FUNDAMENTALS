function solve(array) {
    let result = [];
    let count = 0;
    for (let i =0; i<array.length;i++) {
        if (i%2!=0) {
            result[count] = array[i] *2;
            count++;
        }
        
    }
    result.reverse();
       
console.log((result.join(" ")));
}
solve([10, 15, 20, 25])