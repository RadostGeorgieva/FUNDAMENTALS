function compareElements (array1, array2) {
    for (el of array1) {
        for(el2 of array2) {
            if (el === el2) {
                console.log (el);
            }
        }
    }
}

compareElements ( ['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])