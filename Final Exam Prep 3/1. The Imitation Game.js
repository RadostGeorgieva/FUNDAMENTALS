function solve(array) {
    let str = array.shift();
    let nextCommand = array.shift();
    while (nextCommand != "Travel") {
        let [command, el1, el2] = nextCommand.split(":");
        if (command == "Add Stop" && Number(el1) >= 0 && Number(el1) < str.length) {
            //let newString = str.slice(0, Number(el1)) + el2 + str.slice(Number(el1));
            let strArray = str.split('');
            // ...
            let newStringArray = [...strArray.slice(0, Number(el1)), el2, ...strArray.slice(Number(el1))];
            str = newStringArray.join('');
            console.log(str);
        } else if (command == "Remove Stop" && Number(el1) >= 0 && Number(el1) < str.length && Number(el2) >= 0 && Number(el2) < str.length) {
            let words = str.slice(Number(el1), Number(el2) + 1);
            str = str.replace(words, "");
            console.log(str);
        } else if (command == "Switch" && str.includes(el1) && el1 !== el2) {
            if(str.includes(el1)){
                str = str.replace(el1, el2);
            }
                console.log(str);
        }
    
        else {
            console.log(str);
        }
        nextCommand = array.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${str}`);

}
solve(((["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
])
))
