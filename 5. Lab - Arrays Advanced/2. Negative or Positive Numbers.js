function ordered(array) {
    let result = [];
    for(let i = 0; i<array.length; i++) {
        if(array[i]>=0) {
            result.push(Number(array[i]));
        }
        else{
            result.unshift(Number(array[i]));
        }
      
    }
    console.log(result.join('\n'))
}
ordered(['7', '-2', '8', '9'])