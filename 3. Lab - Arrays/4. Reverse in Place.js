function reverseInPlace(input) {
    let first = 0;
    let last = input.length-1;
    let reserved;
    for (let i = 0; i<input.length/2; i++) {
        reserved = input[first];
        input[first] = input[last];
        input[last] = reserved;
        first++;
        last--;
    }
    console.log(input.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);