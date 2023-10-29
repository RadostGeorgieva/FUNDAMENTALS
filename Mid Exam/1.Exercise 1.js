function solve(input) {
let biscuitsPerWorkerADay = Number(input.shift());
let workers = Number(input.shift());
let otherCompany = Number(input.shift());
let production = 0;
let perDay = biscuitsPerWorkerADay*workers;
for(let i = 1; i <= 30; i++) {
    if(i%3==0) {
        let Of75Usual = Math.floor(perDay*0.75);
        production+=Of75Usual;
    } else {
        production+=perDay;
    }
}
console.log(`You have produced ${production} biscuits for the past month.`);

if(production<otherCompany){
    let difference = otherCompany-production;
    let percentage = (difference/otherCompany) * 100;
    console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
} else {
    let difference = production-otherCompany;
    let percentage = (difference/otherCompany) * 100;
    console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
}
}

solve((["65",
"12",
"26000"])
)
solve((["163",
"16",
"67020"])
)
solve((["78",
"8",
"16000"])
)