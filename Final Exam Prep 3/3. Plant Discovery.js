function solve(array) {
    let n = Number(array.shift());
    let plants = {};
    for (let i = 0; i < n; i++) {
        let [name, rarity] = array.shift().split("<->");
        plants[name] = { rarity: Number(rarity), rating: 0, numberOfRatings: 0 }
    }
    while (array[0] != "Exhibition") {
        let [command, data] = array.shift().split(": ");
        let [plant, amount] = data.split(" - ");
        if (command == "Rate") {

            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating += Number(amount);
                plants[plant].numberOfRatings += 1;

            } else {
                console.log(`error`);
            }
        }
        else if (command == "Update") {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rarity = Number(amount);

            } else {
                console.log(`error`);
            }

        }
        else if (command == "Reset") {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating = 0
                plants[plant].numberOfRatings =0

            } else {
                console.log(`error`);
            }

        }
    
    }
    console.log(`Plants for the exhibition:`);
    let entries = Object.entries(plants);
    for(let [el, value] of entries) {
        let finalRating = value.rating/value.numberOfRatings;
        if(isNaN(finalRating)) {
            finalRating = 0;
        }
        console.log(`- ${el}; Rarity: ${value.rarity}; Rating: ${(finalRating).toFixed(2)}`);
    }
}
solve((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
)