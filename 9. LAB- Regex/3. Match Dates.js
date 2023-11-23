function solve(str) {
    let regEx = /(?<day>\d{2})(?<sep>(.?)(-?)(\/?))(?<month>[A-Z][a-z][a-z])\k<sep>(?<year>\d{4})/g;
    while((match = regEx.exec(str))!=null){
      console.log(`Day: ${match.groups['day']}, Month: ${match.groups['month']}, Year: ${match.groups['year']}`);
    }

}
solve(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016'])