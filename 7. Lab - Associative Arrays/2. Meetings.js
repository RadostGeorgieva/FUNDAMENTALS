function solve(array) {
    let arr = [];
    for(let el of array) {
        let [day, name] = el.split(" ");
        if(arr.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else{
            arr[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for(key in arr) {
        console.log(`${key} -> ${arr[key]}`);
    }
}
solve(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])