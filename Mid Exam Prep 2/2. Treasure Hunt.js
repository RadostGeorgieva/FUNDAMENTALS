function treasureHunt(array) {
    let treasure = array.shift().split('|');
    for (let i = 0; i < array.length; i++) {
        let  current = array[i];
        if (current == "Yohoho!") {
            break;
        }
        current = array[i].split(" ");
        let command = current.shift();
        if (command == "Loot") {
            for (let j = 0; j < current.length; j++) {
                if (treasure.indexOf(current[j]) == -1) {
                    treasure.unshift(current[j]);
                }
            }
        } else if (command == "Drop" && Number(current[0]) > 0 && Number(current[0]) < treasure.length) {
            let toBeDropped = treasure[Number(current[0])];
            treasure.splice(Number(current[0]), 1);
            treasure.push(toBeDropped);
        } else if (command == "Steal") {
            let index = 0
            if(Number(current[0]) < treasure.length && current[0]!=0){
              index = Math.abs(Number(current[0]) - treasure.length);
            }
            let stolen = treasure.splice(index, Number(current[0]));
            
            console.log(stolen.join(', '));
        }
    } 
    if (treasure.length > 0) {
        let averageGain = (treasure.map(item => item.length).reduce((a, b) => a + b, 0)) / treasure.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else
        console.log("Failed treasure hunt.");

}
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])