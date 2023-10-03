function ladybugs(array) {
    let fieldLength = Number(array[0]);
    let field = [];
    //let string = array[1].replace(/ /g, "")
    let bugIndex = array[1].split(' ');
    for (let i = 0; i < fieldLength; i++) {
        for (let j = 0; j < bugIndex.length; j++) {
            if (Number(bugIndex[j]) > fieldLength - 1 || Number(bugIndex[j]) < 0) {
                continue;
            }
            field[Number(bugIndex[j])] = 1;
        }

        if (field[i] != 1) {
            field[i] = 0;
        }
    }

    let currentCommand = "";
    for (let index = 2; index < array.length; index++) {
        currentCommand = array[index].split(' ');
        let indexToBeChecked = Number(currentCommand[0]);
        let direction = currentCommand[1];
        let moves = Number(currentCommand[2]);

        if (field[indexToBeChecked] === 0 || indexToBeChecked < 0 || indexToBeChecked > field.length - 1) {
            continue;
        }
        field[indexToBeChecked] = 0;
        if (moves < 0) {
            direction = direction === "right" ? "left" : "right";
            moves = Math.abs(moves);
        }


        if (direction == "right") {
            let start = indexToBeChecked + moves;
            for (let i = start; i >= 0 && i <= field.length - 1; i += moves) {
                if (field[i] == 0) {
                    field[i] = 1;
                    break;
                }
            }
        } else if (direction == "left") {
            let start = indexToBeChecked - moves;
            for (let i = start; i >= 0 && i <= field.length - 1; i -= moves) {
                if (field[i] == 0) {
                    field[i] = 1;
                    break;
                }
            }
        }


    }
    console.log(field.join(" "));
}
//adybugs([3, '0  1', '33 right 1'])
//ladybugs([5, '3', '3 left 2', '1 left -2']);
ladybugs([10, "-2 -3 -4 12 32 89 6", "0 right 5", "6 right 2", "7 left 1", "19 left 0"])