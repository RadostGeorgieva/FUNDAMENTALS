function special (n) {
    for ( let i = 1; i<= n; i ++) {
        i = i.toString();
        let sum =0;
        for(let j = 0; j < i.length; j++){
            sum+=Number(i[j]);
        }
        console.log((sum == 5 || sum == 7 || sum == 11) ? `${i} -> True`:`${i} -> False`);
                
    }
}
special(15);