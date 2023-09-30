function indenticalArrays(arr1, arr2) {
    let sum =0;

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        sum+=Number(arr1[i]);
        if (arr1[i] !=arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            return;
           
        }
    }
        console.log(`Arrays are identical. Sum: ${sum}`)
}
indenticalArrays(['1','2','3','4','5'],

['1','2','4','4','5']);