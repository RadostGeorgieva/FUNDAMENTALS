function solve(str) {
    let regEx = /\s*(\+359)(?<sep>(-?)( ?))2\k<sep>\d{3}\k<sep>\d{4}/g;
    let matches = str[0].match(regEx);
    console.log(matches.join(","));
    
}
solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222'])