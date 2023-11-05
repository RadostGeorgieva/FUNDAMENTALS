function solve(input) {

    for(let i = 0; i < input.length; i++) {
        let townData = input[i].split(' | ');
        let latitude = Number(townData[1]);
        let longitude = Number(townData[2]);
        let town = {town: townData[0], latitude:latitude.toFixed(2),longitude:longitude.toFixed(2) };
       console.log(town);
    }
}
solve(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])