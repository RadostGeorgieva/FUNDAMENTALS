function invitations(array) {
    let going = [];
    for (let i = 0; i < array.length; i++) {
        let current = array[i].split(" ");
        let [name, is, goingOrNot] = current;
        if (goingOrNot == 'going!') {
            if (going.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                going.push(name);

            }
        } else if (goingOrNot == "not") {
            if (going.includes(name)) {
                going.splice(going.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);

            }
        }
    }
    console.log(going.join('\n'));
}
invitations(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!'])