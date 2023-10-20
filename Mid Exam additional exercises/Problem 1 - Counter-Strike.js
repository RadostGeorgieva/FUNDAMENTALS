function counterStrike(arr) {
    let energy = arr.shift();
    let battlesWon = 0;
    currentBattleCount = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == "End of battle") {
            console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
            return;
        }
        if(energy< arr[i]) {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            return;
        } 
        Number(arr[i]);
        energy-=arr[i];
        battlesWon++;
        currentBattleCount++;
        if(currentBattleCount == 3) {
            energy+=battlesWon;
            currentBattleCount =0;
        }
         
    }
}

counterStrike((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]))