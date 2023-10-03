function dungeons(originalString) {
    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let word = "";
    let amount = "";

    let my_new_string = originalString[0];
    my_new_string = my_new_string.split("|").join(' ');
    let array = my_new_string.split(" ");

    for (let i = 0; i < array.length-1; i++) {
        if (i%2 ==0) {
            word = array[i];
            amount = Number(array[i+1]);
        }
        else {
            continue;
        }
          
            roomCounter++;
            if (word == `potion`) {
                if ((health + amount) > 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                } else {
                    console.log(`You healed for ${amount} hp.`);
                    health += amount;
                }
                console.log(`Current health: ${health} hp.`)

            } else if (word == `chest`) {
                coins += amount;
                console.log(`You found ${amount} coins.`)
            } else {
                health -= amount;
                if (health <= 0) {
                    console.log(`You died! Killed by ${word}.`);
                    console.log(`Best room: ${roomCounter}`);
                    return;
                } else
                    console.log(`You slayed ${word}.`);
            }
        }
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`); 
    }


dungeons(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])