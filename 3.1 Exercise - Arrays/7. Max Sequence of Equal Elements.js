function maxSequenceOfElements(array) {
    let current = [];
    let sequence = false;
    let longest = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] == array[i+1]) {
            current.push(array[i]);
            sequence = true;

        } else if (sequence == true) {
            current.push(array[i]);
            if (current.length > longest.length) {
                longest = current;
              
            }
            sequence = false;
            current = [];
        }

    }
    console.log(longest.join(` `))
}
maxSequenceOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
 maxSequenceOfElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfElements([4, 4, 4, 4])
maxSequenceOfElements([0, 1, 1, 5, 2, 2, 6, 3, 3]) 