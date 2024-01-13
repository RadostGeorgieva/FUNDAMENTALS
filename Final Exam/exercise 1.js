function solve(array) {
    let str = array.shift();
    while (array[0] != "Done") {
        let currentCommand = array.shift().split(" ");
        let command = currentCommand[0];
        if (command == "Change") {
            while (str.includes(currentCommand[1])) {
                str = str.replace(currentCommand[1], currentCommand[2]);
            }
            console.log(str);
        }
        else if (command == "Includes") {
            if(str.includes(currentCommand[1])){
            console.log(`True`);
            } else { console.log(`False`);};
        }
        else if (command == "End") {
            if(str.endsWith(currentCommand[1])){
            console.log(`True`);
            } else { console.log(`False`);};
        }
        else if (command == "Uppercase") {
            str = str.toUpperCase();
            console.log(str);
        }
        else if (command == "FindIndex") {
           console.log(str.indexOf(currentCommand[1]));
        }  
        else if (command == "Cut") {

            let cutted = str.slice(currentCommand[1],Number(currentCommand[1])+Number(currentCommand[2]));
            console.log(cutted);
        }
    }
}
solve(((["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])))