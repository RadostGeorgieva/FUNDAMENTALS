function solve(array) {
let word = array.shift();
let command = array.shift();
while(command!= "Reveal") {
   let arrComand = command.split(":|:");
   if(arrComand[0]=="ChangeAll") {
    while(word.includes(arrComand[1]))
    word = word.replace(arrComand[1],arrComand[2]);
    console.log(word);
   } else if(arrComand[0]== "Reverse"){
    if(word.includes(arrComand[1])){
        let toBeReplaced = arrComand[1].split("").reverse().join("");
        word = word.replace(arrComand[1],toBeReplaced);
        console.log(word);
    } else{
        console.log(`error`);
    }

   } else if(arrComand[0] == "InsertSpace"){
    let wordArr = word.split("");
    wordArr.splice(arrComand[1],0," ");
    word =wordArr.join("");
    console.log(word);
   }
    command = array.shift();
}
console.log(`You have a new text message: ${word}`);
}
solve([

    'Hiware?uiy',
    
    'ChangeAll:|:i:|:o',
    
    'Reverse:|:?uoy',
    
    'Reverse:|:jd',
    
    'InsertSpace:|:3',
    
    'InsertSpace:|:7',
    
    'Reveal'
    
    ])