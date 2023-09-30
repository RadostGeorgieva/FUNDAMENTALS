function adjecent(input) {
    let iteration = input.length-1;
    for(let j = 0; j <input.length; j++){
        for (let i = 0; i<input.length-1; i++) {
            input[i] = input[i] + input[i+1];
        }
        if(iteration!=0){
        input[iteration]=0;
        iteration--;
        }
    }
console.log(input[0]);
}
adjecent([5]);