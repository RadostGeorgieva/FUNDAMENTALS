function solve(array) {
    let heroes = {};
    let n = Number(array.shift());
    for (let i = 0; i < n; i++) {
        let heroData = array.shift().split(" ");
        let name = heroData[0];
        let health = Number(heroData[1]);
        let mana = Number(heroData[2]);
        heroes[name] = [health, mana];
    }
    let command = array.shift().split(" - ");
    while (command != "End") {
        if (command[0] == "CastSpell") {
            if (Number(command[2]) <= heroes[command[1]][1]) {
                heroes[command[1]][1] = heroes[command[1]][1] - Number(command[2]);
                console.log(`${command[1]} has successfully cast ${command[3]} and now has ${heroes[command[1]][1]} MP!`);
            } else {
                console.log(`${command[1]} does not have enough MP to cast ${command[3]}!`);
            }
        }
        else if (command[0] == "TakeDamage") {
            let damage = heroes[command[1]][0] - Number(command[2]);
            heroes[command[1]][0] = damage;
            if (heroes[command[1]][0] > 0) {
                console.log(`${command[1]} was hit for ${command[2]} HP by ${command[3]} and now has ${heroes[command[1]][0]} HP left!`);
            } else {
                delete heroes[command[1]];
                console.log(`${command[1]} has been killed by ${command[3]}!`);
            }
        } else if (command[0] == "Recharge") {
            if (heroes[command[1]][1] + Number(command[2]) > 200) {
                let maned = 200 - heroes[command[1]][1];
                heroes[command[1]][1] = 200;
                console.log(`${command[1]} recharged for ${maned} MP!`);
            }
            else {
                heroes[command[1]][1] += Number(command[2]);
                console.log(`${command[1]} recharged for ${command[2]} MP!`);
            }

    }else if (command[0] == "Heal") {
        if (heroes[command[1]][0] + Number(command[2]) > 100) {
            let healed = 100 - heroes[command[1]][0];
            heroes[command[1]][0] = 100;
            console.log(`${command[1]} healed for ${healed} HP!`);
        }
        else {
            heroes[command[1]][0] += Number(command[2]);
            console.log(`${command[1]} healed for ${command[2]} HP!`);
        }

    }
    command = array.shift().split(" - ");
}
let toBePrinted = Object.entries(heroes);
for(let [key,values] of toBePrinted) {
    console.log(`${key}`);
    console.log(`  HP: ${values[0]}`);
    console.log(`  MP: ${values[1]}`);
}
}


solve(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])