function solve(arr) {
    let newArray = removeDuplicates(arr);
;
console.log(newArray.join(' '));
function removeDuplicates(arr) { 
    return arr.filter((item, 
        index) => arr.indexOf(item) === index); 
}
}
solve([7, 8, 9, 7, 2, 3,

    4, 1, 2])
    let arr = ["apple", "mango", "apple", 
          "orange", "mango", "mango"]; 
  
function removeDuplicates(arr) { 
    return arr.filter((item, 
        index) => arr.indexOf(item) === index); 
} 
console.log(removeDuplicates(arr));