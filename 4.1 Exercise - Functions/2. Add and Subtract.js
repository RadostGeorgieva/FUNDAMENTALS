function solve(n1,n2,n3) {
    function sum(n1,n2) {
        return n1+n2;
    }
    function subsctract(n1,n2,n3) {
        return sum(n1,n2) - n3;
    }
    console.log(subsctract(n1,n2,n3));
}
solve(23,6,10)