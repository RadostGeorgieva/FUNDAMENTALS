function searchForNumber(array, numbers) {
    let [nToTake, nToDelete, nToSearch] = numbers;
    let newArray = array.slice(0, nToTake);
    newArray.splice(0, nToDelete);
    let occurrences = countOccurrences(newArray, nToSearch);
    console.log(`The number ${nToSearch} appears ${occurrences} times.`);
    function countOccurrences(newArray, nToSearch) {
        return newArray.reduce(function(count, number) {
            // Check if the current number is equal to the targetNumber
            if (number === nToSearch) {
                // If yes, increment the count
                return count + 1;
            } else {
                // If not, just return the current count
                return count;
            }
        }, 0);
    }
}
searchForNumber([5, 2, 3, 4, 1, 6],[5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7],

    [3, 1, 5])