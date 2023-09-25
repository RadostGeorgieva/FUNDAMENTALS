function primeNumber(number) {
let isPrime = true;

// check if number is greater than 1
if (number > 1) {

    
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`true`);
    } else {
        console.log(`false`);
    }
}
}
primeNumber(7);