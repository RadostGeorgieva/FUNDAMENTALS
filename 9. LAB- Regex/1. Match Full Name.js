function solve(str) {
    let array = str.split(", ");
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    let matches = str.match(regEx);
    console.log(matches.join(" "));
    
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")