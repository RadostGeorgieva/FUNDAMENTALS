function solve(array) {
    let heroesArray = {};
    
    let n = Number(array.shift());
    for (let i = 0; i < n; i++) {
        let heroData = array.shift().split(" "); 
        let hero = {
            health: Number(heroData[1]),
            mana: Number(heroData[2])
        }
        heroesArray[heroData[0]] = hero;
    }
    let command = array.shift().split(" - ");
    while (command != "End") {
        if (command[0] == "CastSpell") {
            if (Number(command[2]) <= heroesArray[command[1]].mana) {
                heroesArray[command[1]].mana = heroesArray[command[1]].mana - Number(command[2]);
                console.log(`${command[1]} has successfully cast ${command[3]} and now has ${heroesArray[command[1]].mana} MP!`);
            } else {
                console.log(`${command[1]} does not have enough MP to cast ${command[3]}!`);
            }
        }
        else if (command[0] == "TakeDamage") {
            let damage = heroesArray[command[1]].health - Number(command[2]);
            heroesArray[command[1]].health = damage;
            if (heroesArray[command[1]].health> 0) {
                console.log(`${command[1]} was hit for ${command[2]} HP by ${command[3]} and now has ${heroesArray[command[1]].health} HP left!`);
            } else {
                delete heroesArray[command[1]];
                console.log(`${command[1]} has been killed by ${command[3]}!`);
            }
        } else if (command[0] == "Recharge") {
            if (heroesArray[command[1]].mana + Number(command[2]) > 200) {
                let maned = 200 - heroesArray[command[1]].mana;
                heroesArray[command[1]].mana= 200;
                console.log(`${command[1]} recharged for ${maned} MP!`);
            }
            else {
                heroesArray[command[1]].mana += Number(command[2]);
                console.log(`${command[1]} recharged for ${command[2]} MP!`);
            }

    }else if (command[0] == "Heal") {
        if (heroesArray[command[1]].health + Number(command[2]) > 100) {
            let healed = 100 - heroesArray[command[1]].health;
            heroesArray[command[1]].health = 100;
            console.log(`${command[1]} healed for ${healed} HP!`);
        }
        else {
            heroesArray[command[1]].health  += Number(command[2]);
            console.log(`${command[1]} healed for ${command[2]} HP!`);
        }

    }
    command = array.shift().split(" - ");
}
let toBePrinted = Object.values(heroesArray);
for(let [key, values] in toBePrinted) {
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