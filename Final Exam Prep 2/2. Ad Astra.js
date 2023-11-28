function solve(array) {
    let regex = /(#|\|)[a-zA-Z ]+\1(\d{2}\/\d{2}\/\d{2})\1(10000|\d{1,4})\1/g;
    let matches = array[0].match(regex);
    let totalCalories = 0;
    if(matches!=null){
    for(let match of matches) {
       match = match.split(match[0]);
       totalCalories+=Number(match[3]);
       
    }
}
    let days = totalCalories/2000;
    console.log(`You have food to last you for: ${(Math.trunc(days))} days!`);
    if(matches!=null){
    for(let match of matches) {
        match = match.split(match[0]);
        console.log(`Item: ${match[1]}, Best before: ${match[2]}, Nutrition: ${match[3]}`);
     }

}
}
solve(['Hello|#Invalid food#19/03/20#450|$5*(@'])