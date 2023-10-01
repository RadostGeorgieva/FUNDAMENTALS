function solve(array) {
    let sumLeft = 0;
    let sumRight = 0;
 for( let i = 0; i < array.length; i++) {
    for( let j = i-1; j >= 0; j--) {
        sumLeft+=array[j];
    }
    for( let k = i+1; k < array.length; k++) {
        sumRight+=array[k];
    }
    if(sumLeft == sumRight) {
        console.log(i);
        return;
    } else{
        sumLeft = 0;
        sumRight = 0;
    }
 }
 console.log("no");

}
solve([1, 2, 3, 3]);
solve([1])
solve([1, 2, 3]);
solve([10, 5, 5, 99,3, 4, 2, 5, 1, 1, 4])

