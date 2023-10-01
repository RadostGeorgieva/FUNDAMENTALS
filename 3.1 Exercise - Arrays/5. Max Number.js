function biggestInteger(array) {
    let isBigger = true;
    let newArray = [];
    for(let i = 0; i <array.length; i++) {
        for(let j = i+1; j < array.length; j++) {
            if(array[i]<= array[j]) {
                isBigger = false;
                break;
            }    
        }
      if(isBigger) {
        newArray.push(array[i]);
      } else {
        isBigger = true;
      }
    }
    console.log(newArray.join(` `));
}
biggestInteger([41, 41, 34, 20]);
