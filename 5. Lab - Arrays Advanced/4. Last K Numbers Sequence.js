function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    for (let current = 1; current < n; current++) {
    let start = Math.max(0, current - k);
    let end = current - 1;
    let sum = addElements(start,end)
    seq[current] = sum;
    }
    function addElements(start,end) {
        let result  = 0;
        for(let i = start; i<= end; i++) {
            result+=seq[i];
        }
        return result;
    }

    console.log(seq.join(' '));
   }
   sumLastKNumbersSequence(6,3)