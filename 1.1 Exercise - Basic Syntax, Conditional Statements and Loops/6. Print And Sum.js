function concat(start, end){
    let sum =0;
    let numberAsStr="";
    for(let i = start; i<=end; i++){
        sum+=i;
        numberAsStr+=i + " ";
       
    }
    console.log(numberAsStr);
    console.log(`Sum: ${sum}`);
}
concat(5,10)