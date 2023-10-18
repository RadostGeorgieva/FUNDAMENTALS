function game(array) {
    let rooms = array.split("|");
    let health = 100;
    let bitcoins = 0;
    for (let i = 0; i < rooms.length; i++){
    let [word, amount] = rooms[i].split(' ');
    amount = Number(amount);
    if (word == "potion") {
        if (health + Number(amount)> 100) {
            amount = 100 - health;
        }
        health += amount;
        console.log(`You healed for ${amount} hp.`);
        console.log(`Current health: ${health} hp.`);
    } else if (word == "chest") {
        bitcoins += amount;
        console.log(`You found ${amount} bitcoins.`);
    } else {
        if(health-amount<=0) {
            console.log(`You died! Killed by ${word}.`);
            console.log(`Best room: ${i+1}`);
            return;
        } else {
            health-=amount;
            console.log(`You slayed ${word}.`);
        }

    }
}
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);

}
//game("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
game("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")