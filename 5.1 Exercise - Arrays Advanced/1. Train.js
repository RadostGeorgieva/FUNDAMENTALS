function trains(array) {
    let arr = array.shift().split(' ').map(Number);
    let maxNumber = Number(array.shift());
    for (let i = 0; i < array.length; i++) {
        let currentComand = array[i].split(' ');
        if(currentComand[0] == "Add"){
            arr.push(Number(currentComand[1]));
        } else {
            let indexToBeReplaced = arr.find((element) => element+Number(currentComand[0]) <= maxNumber);
            arr.splice(arr.indexOf(indexToBeReplaced),1,Number(currentComand[0])+indexToBeReplaced);
        }

    }
    console.log(arr.join(" "));
}
trains(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])
trains(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])