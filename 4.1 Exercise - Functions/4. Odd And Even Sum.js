function oddAndEvenSum(number) {
    function oddSum(number) {
        let sum = 0;
        let numberToString =number.toString();
        for(let i = 0; i <numberToString.length; i++) {
            if(numberToString[i] % 2 != 0) {
                sum+=Number(numberToString[i]);
            }
        }
        return sum;
    }
    function evenSum(number) {
        let sum = 0;
        let numberToString =number.toString();
        for(let i = 0; i <numberToString.length; i++) {
            if(numberToString[i] % 2 == 0) {
                sum+=Number(numberToString[i]);
            }
        }
        return sum;
    }
    console.log(`Odd sum = ${oddSum(number)}, Even sum = ${evenSum(number)}`);
}
oddAndEvenSum(1000435);