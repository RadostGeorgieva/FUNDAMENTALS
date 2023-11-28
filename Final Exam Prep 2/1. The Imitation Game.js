function solve(array) {
    let str = array.shift();
    while (array[0] != "Decode") {
        let command = array.shift().split("|");
        if (command[0] == "ChangeAll") {
            while(str.includes(command[1])){
                str = str.replace(command[1],command[2]);
            }
        } else if (command[0] == "Insert")     {
              let substring = command[2];
              let index = command[1];
             let result = str.slice(0, index) + substring + str.slice(index);
             str = result
        }
        else if (command[0] == "Move") {
            let words = str.slice(0, Number(command[1]));
            str = str.replace(words, "");
            str += words;
        }
    }
    console.log(`The decrypted message is: ${str}`);
}
solve([

    'zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode'

])