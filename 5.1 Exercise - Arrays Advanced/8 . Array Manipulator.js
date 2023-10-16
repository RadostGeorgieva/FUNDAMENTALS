function arrayManipulator(array, commands) {

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(" ");
        switch (command[0]) {
            case "add":
                array.splice(Number(command[1]), 0, Number(command[2]));
                break;
            case "addMany":
                let index = Number(command[1]);
                for (let j = 2; j < command.length; j++) {
                    array.splice(index, 0, Number(command[j]));
                    index++;
                }
                break;
            case "contains":
                console.log(array.indexOf(Number(command[1])));
                break;
            case "remove":
                array.splice(Number(command[1]), 1);
                break;
            case "shift":
                array = shiftArrayRight(array,Number(command[1]));
                break;
            case "sumPairs":
                let result = [];
                for (let j = 0; j < array.length; j++) {
                    if (j % 2 == 0) {
                        result.push(Number(array[j]) + (Number(array[j + 1] || 0)));
                    }
                }
                array = result;
                break;
            case "print":
                let result1 = array.join(', ');

                console.log(`[ ${result1} ]`);
                return;

        }
    }
    function shiftArrayRight(array, positions) {
        positions = positions % array.length;
        let arrayShifted = array.slice(positions).concat(array.slice(0, positions));
        array = arrayShifted

        return array;
    }
}

arrayManipulator([2,3,5,4],["remove 4", "remove 3", "shift 2", "print"])
