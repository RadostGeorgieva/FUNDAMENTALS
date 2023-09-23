function amazingNumber(number) {
    let sum = 0;
    let numberAsString = String(number);
    for (let i = 0; i<(numberAsString.length); i++){ 
         sum+=Number(numberAsString[i]);
    }
    let amazing = "False";
    let sumAsString = String(sum);
    for (let i = 0; i<sumAsString; i++) {
        if(Number(sumAsString[i]) == 9) {
            amazing = "True";
        }
    }
    console.log(`${number} Amazing? ${amazing}`)
}
amazingNumber(1233)