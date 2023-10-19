function numbers(arr) {
    let strAsArr = arr.split(" ");
    let array = strAsArr.map(Number);

    const totalElements = array.reduce((acc, current) => acc + current, 0);
    const average = totalElements / array.length;
    let numbers = array.filter(el=> el>average)
    if(numbers.length<=0) {
        console.log('No');
    } else{
    numbers.sort((a, b) => b - a);
    let five = numbers.slice(0, 5);
    console.log(five.join(' '));
    }


}

numbers('-1 -2 -3 -4 -5 -6')