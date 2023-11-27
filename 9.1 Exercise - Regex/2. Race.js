function solve(array) {
let names = array.shift().split(", ");
let pairs = {};
for(el of array){
    if (el === "end of race") {
        let sorted = Object.entries(pairs).sort((a,b)=>(b[1]-a[1]))
            console.log(`1st place: ${sorted[0][0]}`);
            console.log(`2nd place: ${sorted[1][0]}`);
            console.log(`3rd place: ${sorted[2][0]}`);
            
        }
    
     else {
        let regex = /([a-zA-Z]+)|(\d+)/g;
        let matches;
        let name = "";
        let distance = "";

        while ((matches = regex.exec(el)) !== null) {
            if(matches[1]!=undefined){
            name+= matches[1];
            } if(matches[2]!=undefined){
            distance += matches[2];
            }
        }
        totalDistance = Array.from(distance).reduce((sum, digit) => sum + parseInt(digit), 0);
        if(names.includes(name)) {
            if(pairs.hasOwnProperty(name)){
            pairs[name] += totalDistance;
            } else{
                pairs[name] = totalDistance;
            }
        };

    }
}
}
solve(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])
solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne','Mi*&^%$ch123o!#$%#nne787) ',

'%$$B(*&&)i89ll)*&) ',

'R**(on%^&ald992) ',

'T(*^^%immy77) ',

'Ma10**$#g0g0g0i0e',

'end of race'])