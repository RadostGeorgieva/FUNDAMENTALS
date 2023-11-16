function solve(array) {
let newWord = (array[0]+array[1]).toLowerCase();
let thirdWord = array.pop().toUpperCase();
let password = "";
let index = 0;
for(character of newWord) {

    if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u" )  {
        password+=thirdWord[index];
        if(index == thirdWord.length-1){
            index =0
        }else{
            index++
        }

    }else{
        password+=character;
    }
}
password = password.split("").reverse().join("");
console.log(`Your generated password is ${password}`);
}
solve([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
    
    ])