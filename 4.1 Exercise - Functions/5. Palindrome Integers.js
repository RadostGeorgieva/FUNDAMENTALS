function palindromeIntegers(numbers) {
    function palindrome(n) {
        let nToString = n.toString();
        let end = nToString.length - 1;
        for(let i = 0; i < nToString.length / 2; i++) {
            if(nToString[i] != nToString[end]){
                return false;
            }
            end--;
        }
        return true;
    }
    for(let n of numbers) {
        if(palindrome(n)) {
            console.log('true');
        } else
            console.log('false');
    }
}
palindromeIntegers([32,2,232,1010]);