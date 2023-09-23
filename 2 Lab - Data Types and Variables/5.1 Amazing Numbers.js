function solve(number) { 
    number = number.toString();
    let sum =0;
    for(let i = 0; i<number.length; i++) {
        sum+=Number(number[i]);
    }
    let amazing = sum.toString().includes('9');
    console.log(amazing ? `${number} Amazing? True` : `${number} Amazing? False`);
}
solve(333)