function bombNumbers(array, bombSequence) {
    let [bomb, sequence] = bombSequence;
    for(let i =0; i< array.length; i++) {
        if(array[i] == bomb) {
            let before = i-sequence;
            if(before<0){
                array.splice(0,i);
                array.splice(array.indexOf(bomb),sequence+1);
                i=-1;
            } else{
            array.splice(before,sequence);
            array.splice(before,sequence+1);
            i=-1;
            }
        }
    }
    if(array.length!=0){
    let sum = array.reduce(function(a, b){
        return a + b;
      });
      console.log(sum);
    }else
    console.log(0);
   
      
}
bombNumbers([1, 2, 2, 4, 2, 2,2, 9],[2, 4]);
//bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
//bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
//bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1])