function sumEvenNumbers(input) {
    let sum = 0;
    for (let n of input) {
        if(Number(n)%2==0) {
            sum+=Number(n);
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6']);