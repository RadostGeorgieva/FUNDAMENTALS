function miningBitcoins(input) {
    let amountOfDay=0;
    let bitcounsMined=0;
    let money=0;
    let totalAmountMined=0;
    let days=0;
    let firstBitcoin=0;
    for (let index = 0; index < input.length; index++) {
        amountOfDay = Number(input[index]);
        days++;
        if (days % 3 == 0) {
            amountOfDay *= 0.7;
        }
        money += (amountOfDay * 67.51);
        if (money >= 11949.16) {
            if (bitcounsMined == 0) {
                firstBitcoin = days;
            }
            while(money>=11949.16) {
            bitcounsMined++;
            money -= 11949.16;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcounsMined}`);
    if (firstBitcoin>0) {

        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
miningBitcoins(["3124.15", "504.212", "2511.124"])
