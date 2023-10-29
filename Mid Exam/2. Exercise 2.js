function solve(input) {
    let array = input.shift().split(" ").map(Number);
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        if (command[0] == "Finish") {
            console.log(array.join(" "));
            return;
        } else if (command[0]  == "Add") {
            array.push(Number(command[1]));
        } else if (command[0]  == "Remove" && array.indexOf(Number(command[1]) != -1)) {
            let index = array.indexOf(Number(command[1]));
            array.splice(index,1);
        } else if (command[0]  == "Replace" && array.indexOf(Number(command[1]) != -1)) {
            let index = array.indexOf(Number(command[1]));
            let add =  Number(command[2]);
            array.splice(index,1,add);
        } else if (command[0]  == "Collapse") {
           let filteredArray = array.filter(item => item >= Number(command[1]));
           array=filteredArray;
            
        }
    }
}

        solve((["5 9 70 -56 9 9",
        "Replace 9 10",
        "Remove 9",
        "Finish"])
        )
        solve((["1 20 -1 10",
        "Collapse 8",
        "Finish"])
        )
        solve((["1 4 5 19",
        "Add 1",
        "Remove 4",
        "Finish"])
        )

