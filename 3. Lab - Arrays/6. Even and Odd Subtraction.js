function evenAndOdd(input) {
    let even = 0;
    let odd = 0;
    for (n of input) {
        if(n%2==0) {
            even+=n;
        } else
            odd+=n;
    }
    console.log(even-odd);
}
evenAndOdd([3,5,7,9]);