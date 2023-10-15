function sortingBy2Criteria(array) {
    array.sort(customSort)
    function customSort(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } 
       else{
        return a.localeCompare(b);
        }
    }
    ;
    console.log(array.join('\n'));
}
sortingBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortingBy2Criteria(['alpha',

    'beta',

    'gamma']);