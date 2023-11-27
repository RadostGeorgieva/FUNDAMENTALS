function solve(str) {
    let regEx = /(#|@)([a-zA-z]{3,})\1{2}([a-zA-z]{3,})\1/g;
    let matches = str[0].match(regEx);
    let pairs = [];
    if(matches){
        console.log(`${matches.length} word pairs found!`);
        for(el of matches) {
            let firstPart = el.split("").splice(0,el.length/2).join("");
            let secondPart = el.split("").splice(el.length/2).reverse().join("");
            if(secondPart == firstPart) {
                let regex = /[@#]/g
                firstPart = firstPart.replace(regex,"");
                secondPart = secondPart.replace(regex,"");

                pairs.push(firstPart+" <=> "+secondPart.split("").reverse().join(""));
                }
            }
            if(pairs.length!=0){
                console.log(`The mirror words are:`);
                console.log(pairs.join(", "));
            }
                
             else {
                console.log(`No mirror words!`);
        
                 }
        }
        
     else {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
    }
    

}
solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#PaArt##trAaP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])