function reverse(n, array) {
    let reversed = [];
    let index = 0;
    for(let i = n-1; i>=0; i--) {
        reversed[index] = array[i];
        index++;
    }
    console.log(reversed.join(` `));
}
reverse(3, [10, 20, 30, 40, 50])