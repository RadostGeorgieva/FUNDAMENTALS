function manOWar(array) {
    let pirateShip = array[0].split(">").map(Number);
    let warship = array[1].split(">").map(Number);
    let maxHealth = Number(array[2]);
    for (let i = 3; i < array.length; i++) {
        let command = array[i].split(" ");
        if (command[0] == "Retire") {
            break;

        } else if (command[0] == "Fire"
         && Number(command[1]) >= 0
         && Number(command[1]) < warship.length) {
            warship[Number(command[1])] -= Number(command[2]);
            if (warship[Number(command[1])] <= 0) {
                console.log("You won! The enemy ship has sunken.");
                return;
            }
        } else if (command[0] == "Defend"
        && Number(command[1]) >= 0
        && Number(command[1]) < pirateShip.length
        && Number(command[2]) >= 0
        && Number(command[2]) < pirateShip.length) {
            for (let j = Number(command[1]); j <= Number(command[2]); j++) {
                pirateShip[j] -= Number(command[3]);
                if (pirateShip[j] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    return;
                }
            }
        } else if (command[0] == "Repair"
        && Number(command[1]) >= 0
        && Number(command[1]) < pirateShip.length) {
            pirateShip[Number(command[1])] += Number(command[2]);
            if (pirateShip[Number(command[1])] > maxHealth) {
                pirateShip[Number(command[1])] = maxHealth;
            }
        } else if (command[0] == "Status") {
            let result = repairNeeded(pirateShip, maxHealth);
            console.log(`${result} sections need repair.`);

        }
    }
    let finalPirate = sumArrayElements(pirateShip);
    let finalWar = sumArrayElements(warship);
    function sumArrayElements(arr) {
        return arr.reduce((sum, current) => sum + Number(current), 0);
    }
    console.log(`Pirate ship status: ${finalPirate}`);
    console.log(`Warship status: ${finalWar}`);

function repairNeeded(arr, number) {
    let threshold = 0.2 * number;
    let count = arr.reduce((acc, item) => (item < threshold ? acc + 1 : acc), 0);
    return count;
}
    
}
manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])
