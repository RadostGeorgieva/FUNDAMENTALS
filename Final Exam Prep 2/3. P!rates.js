function solve(array) {
let cities = {};
while(array[0]!="Sail") {
    let  currentCity = array.shift().split("||");
    if(cities.hasOwnProperty([currentCity[0]])) {
        cities[currentCity[0]].popilation+=Number(currentCity[1]);
        cities[currentCity[0]].amount+=Number(currentCity[2]);

    } else{
    cities[currentCity[0]] = {
        popilation: Number(currentCity[1]),
        amount: Number(currentCity[2])
    }
}
}
while(array[0]!="End") {
    let  command = array.shift().split("=>");
   if(command[0] == "Plunder" && cities.hasOwnProperty(command[1])) {
    cities[command[1]].popilation-=Number(command[2]);
    cities[command[1]].amount-=Number(command[3]);
    console.log(`${[command[1]]} plundered! ${command[3]} gold stolen, ${command[2]} citizens killed.`);
    if(cities[command[1]].amount <=0 ||  cities[command[1]].popilation <= 0){
        console.log(`${[command[1]]} has been wiped off the map!`);
        delete cities[command[1]];
   }
}
  else if(command[0] == "Prosper"&& cities.hasOwnProperty(command[1])) {
    if(Number(command[2])<0) {
        console.log(`Gold added cannot be a negative number!`);
    } else {
    cities[command[1]].amount+=Number(command[2]);
    console.log(`${command[2]} gold added to the city treasury. ${command[1]} now has ${cities[command[1]].amount} gold.`);
    }
   }
}
let entires = Object.entries(cities);
if(entires.length<1) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
} else {
   console.log(`Ahoy, Captain! There are ${entires.length} wealthy settlements to go to:`);
    for([key, value] of entires) {
        console.log(`${key} -> Population: ${value.popilation} citizens, Gold: ${value.amount} kg`);
    }

}
}
solve(((["Nassau||95000||1000",

"San Juan||930000||1250",

"Campeche||270000||690",

"Port Royal||320000||1000",

"Port Royal||100000||2000",

"Sail",

"Prosper=>Port Royal=>-200",

"Plunder=>Nassau=>94000=>750",

"Plunder=>Nassau=>1000=>150",
"Plunder=>San Juan=>930000=>930000",
"Plunder=>Campeche=>930000=>930000",

"Plunder=>Port Royal=>150000000=>150000000",

"End"])))