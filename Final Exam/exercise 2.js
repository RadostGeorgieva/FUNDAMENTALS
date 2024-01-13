function solve(array) {
let n = Number(array.shift());
for(let i =0; i < n; i++) {
    let str = array.shift();
    let regex = /(.+)>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1/g
    let match = regex.exec(str);
    if(match) {
        let pass = match[2]+match[3]+match[4]+match[5];
        console.log(`Password: ${pass}`);
    } else {
        console.log(`Try another password!`);
    }
}
}
solve(((["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])))