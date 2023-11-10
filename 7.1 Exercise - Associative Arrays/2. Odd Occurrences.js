function solve(str) {
    str = str.toLowerCase();
    let arr = str.split(" ");
    let occurrences = new Map();
    for (let el of arr) {
        occurrences.set(el, (occurrences.get(el) || 0) + 1);
    }
    let onlyToPrint = " ";
    for([el, value] of occurrences){
        if (value%2!=0) {
            onlyToPrint+=el + " ";
        }
    }
    console.log(onlyToPrint);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')