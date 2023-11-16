function solve(str) {
    let first = str.substring(0,(str.length/2)).split("");
    let second = str.substring((str.length/2)).split("");
     second = second.reverse();
     first = first.reverse();
    console.log(first.join(""));
    console.log(second.join(""));

}
solve('tluciffiDsIsihTgnizamAoSsIsihT')