function solve(array) {
    let arr = array[0].split(' ').map(Number);
    for (let i = 1; i < array.length; i++) {
        let order = array[i].split(' ');
        switch (order[0]) {
            case 'Add': arr.push(Number(order[1])); break;
            case 'Remove':
                let index = arr.indexOf(Number(order[1]));
                while (index !== -1) {
                    arr.splice(index, 1);
                    index = arr.indexOf(Number(order[1]));
                }; break;
            case 'RemoveAt':arr.splice(Number(order[1]),1);break;
            case 'Insert': arr.splice(Number(order[2]), 0,Number(order[1]));break;
        }
    }
    console.log(arr.join(' '));

}
solve(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2'])