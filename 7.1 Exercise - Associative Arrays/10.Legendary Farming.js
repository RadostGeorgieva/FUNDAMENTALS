function solve(array){
let arr = array.toLowerCase().split(" ");
let usefulMaterials = {shards: 0, fragments: 0, motes: 0}
let legendaries = {J: `Shadowmourne`, fragments: `Valanyr`, motes: `Dragonwrath`}
let rest = {};
for(let i =0; i < arr.length; i+=2) {
    let material = arr[i+1];
    let amount = Number(arr[i]);
    if(usefulMaterials.hasOwnProperty(material)){
        usefulMaterials[material]+=amount;
        if(usefulMaterials[material]>=250){
            usefulMaterials[material]-=250;
            console.log(`${legendaries[material]} obtained!`);
            break;
        }
    } else {
        if(rest.hasOwnProperty(material)){
            rest[material]+=amount;
        } else {
            rest[material]=amount;
        }
    }

 }
 let usefulOrdered = Object.entries(usefulMaterials);
    usefulOrdered.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        }
        return a[0].localeCompare(b[0]);
    })
    for(let [key, value] of usefulOrdered) {
        console.log(`${key}: ${value}`);
    }
    let restOrdered =Object.entries(rest).sort((a,b)=> a[0].localeCompare(b[0]));
    for(let [key, value] of restOrdered) {
        console.log(`${key}: ${value}`);
    }
}
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')