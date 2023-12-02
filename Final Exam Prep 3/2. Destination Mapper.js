function solve(str) {
let regex = /(=|\/)([A-Za-z]{2,})\1/g;
let matches = str.match(regex);
let points = 0;
let matchesAsString = [];
if(matches!=null) {
    for(let match of matches){
       let rgx = /[=\/]/g
       matchesAsString.push(match.replace(rgx, ""));
    }
    for(let match of matchesAsString){
        points+= match.length;
    }
}

matchesAsString = matchesAsString.join(", ");

console.log(`Destinations: ${matchesAsString}`);
console.log(`Travel Points: ${points}`);
}
solve("/Cyprus/=Hawai==Invalid/invalid==i5valid=/I5valid/=i=	Destinations: Hawai, CyprusTravel Points: 11")
