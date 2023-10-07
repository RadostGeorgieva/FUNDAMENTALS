function solve(number1, number2, number3) {
    let negativeCounter = 0;
    function signCheck(number) {
        if (number < 0) {
            return true;
        }
        return false;
    }

    function signCount(number1, number2, number3) {
        if (signCheck(number1)) {
            negativeCounter++;
        }
        if (signCheck(number2)) {
            negativeCounter++;
        }
        if (signCheck(number3)) {
            negativeCounter++;
        }
        return negativeCounter;
    }
if (signCount(number1, number2, number3) == 2 || signCount(number1, number2, number3)==0) {
    console.log("Positive");
} else
    console.log("Negative");
}
solve(5,
    -12,
    -15)

